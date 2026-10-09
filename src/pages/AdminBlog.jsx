import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Octokit } from '@octokit/rest';
import './AdminBlog.css';

const REPO_OWNER = 'demiansoberanes7-stack';
const REPO_NAME = 'WEB-ZORRO-TECH';
const FILE_PATH = 'src/data/blogs.json';

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ id: '', title: '', description: '', coverUrl: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('github_pat') || '');
  const [isLoading, setIsLoading] = useState(false);
  const [fileSha, setFileSha] = useState('');
  const [message, setMessage] = useState('');

  // Cargar blogs desde GitHub si hay token
  useEffect(() => {
    if (token) fetchBlogsFromGitHub();
  }, [token]);

  const fetchBlogsFromGitHub = async () => {
    setIsLoading(true);
    setMessage('Cargando desde la nube...');
    try {
      const octokit = new Octokit({ auth: token });
      const response = await octokit.repos.getContent({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: FILE_PATH,
      });

      // Github returns content in base64
      const contentBase64 = response.data.content;
      setFileSha(response.data.sha);
      
      // Decodificar Base64 manejando caracteres UTF-8 (acentos, ñ)
      const decodedStr = decodeURIComponent(escape(atob(contentBase64)));
      setBlogs(JSON.parse(decodedStr));
      setMessage('');
    } catch (error) {
      console.error(error);
      setMessage('Error al cargar datos. Verifica tu Token de GitHub.');
    }
    setIsLoading(false);
  };

  const saveToGitHub = async (newBlogsArray) => {
    setIsLoading(true);
    setMessage('Guardando cambios en la nube...');
    try {
      const octokit = new Octokit({ auth: token });
      
      // Codificar a Base64 manejando UTF-8
      const jsonString = JSON.stringify(newBlogsArray, null, 2);
      const encodedContent = btoa(unescape(encodeURIComponent(jsonString)));

      const response = await octokit.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: FILE_PATH,
        message: 'Actualizando blogs desde panel admin',
        content: encodedContent,
        sha: fileSha // Necesario para sobreescribir el archivo existente
      });

      setFileSha(response.data.content.sha); // Actualizar el SHA con la nueva versión
      setBlogs(newBlogsArray);
      setMessage('¡Guardado exitosamente en la nube!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error(error);
      setMessage('Error al guardar. Asegúrate de tener permisos en GitHub.');
    }
    setIsLoading(false);
  };

  const handleTokenSave = (e) => {
    e.preventDefault();
    const inputToken = e.target.elements.tokenInput.value;
    localStorage.setItem('github_pat', inputToken);
    setToken(inputToken);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.coverUrl) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    let updatedBlogs;
    if (isEditing) {
      updatedBlogs = blogs.map(b => b.id === formData.id ? { ...b, ...formData } : b);
      setIsEditing(false);
    } else {
      const newBlog = {
        ...formData,
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0]
      };
      updatedBlogs = [...blogs, newBlog];
    }
    
    setFormData({ id: '', title: '', description: '', coverUrl: '' });
    saveToGitHub(updatedBlogs); // Automáticamente guarda en Github al publicar
  };

  const handleEdit = (blog) => {
    setFormData(blog);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de eliminar este blog de la nube?')) {
      const updatedBlogs = blogs.filter(b => b.id !== id);
      saveToGitHub(updatedBlogs);
    }
  };

  // Pantalla de configuración del Token si no existe
  if (!token) {
    return (
      <div className="admin-page">
        <div className="admin-content" style={{ justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
          <div className="admin-form-section" style={{ maxWidth: '500px', textAlign: 'center' }}>
            <h2>Configuración de la Nube</h2>
            <p>Para guardar los blogs directamente en GitHub sin descargar archivos, ingresa tu <b>Token de Acceso Personal (PAT)</b> de GitHub.</p>
            <form onSubmit={handleTokenSave} style={{ marginTop: '20px' }}>
              <input 
                name="tokenInput"
                type="password" 
                placeholder="ghp_xxxxxxxxxxxxxxxxx" 
                style={{ width: '100%', padding: '12px', marginBottom: '15px' }}
                required 
              />
              <button type="submit" className="admin-btn-submit">Conectar a la Nube</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <Link to="/" className="admin-back">← Volver al inicio</Link>
        <h1>☁️ Nube: Admin Blogs</h1>
        <div>
           {isLoading && <span style={{ marginRight: '15px', color: '#ffd166' }}>Sincronizando...</span>}
           <button onClick={() => { localStorage.removeItem('github_pat'); setToken(''); }} className="admin-btn-cancel" style={{ padding: '8px 15px' }}>Desconectar</button>
        </div>
      </header>

      {message && <div style={{ background: '#ff6b2b', color: 'white', textAlign: 'center', padding: '10px' }}>{message}</div>}

      <div className="admin-content">
        <div className="admin-form-section">
          <h2>{isEditing ? 'Editar Blog' : 'Crear Nuevo Blog'}</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Título del Blog</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleInputChange} 
                placeholder="Ej. Las mejores páginas web del 2026"
                disabled={isLoading}
              />
            </div>
            
            <div className="form-group">
              <label>Descripción corta</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleInputChange} 
                placeholder="Un breve resumen de lo que trata el artículo..."
                rows="4"
                disabled={isLoading}
              ></textarea>
            </div>

            <div className="form-group">
              <label>URL de la Portada (Imagen)</label>
              <input 
                type="text" 
                name="coverUrl" 
                value={formData.coverUrl} 
                onChange={handleInputChange} 
                placeholder="/assets/mi-imagen.jpg o https://..."
                disabled={isLoading}
              />
              {formData.coverUrl && (
                <div className="preview-image">
                  <img src={formData.coverUrl} alt="Vista previa" onError={(e) => e.target.style.display = 'none'} />
                </div>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="admin-btn-submit" disabled={isLoading}>
                {isLoading ? 'Guardando...' : (isEditing ? 'Actualizar en la Nube' : 'Publicar en la Nube')}
              </button>
              {isEditing && (
                <button type="button" className="admin-btn-cancel" disabled={isLoading} onClick={() => { setIsEditing(false); setFormData({ id: '', title: '', description: '', coverUrl: '' }); }}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="admin-list-section">
          <h2>Blogs en la Nube ({blogs.length})</h2>
          <div className="blogs-list">
            {blogs.length === 0 && !isLoading && <p>No hay blogs publicados aún.</p>}
            {blogs.map(blog => (
              <div key={blog.id} className="blog-item">
                <img src={blog.coverUrl} alt={blog.title} className="blog-item-cover" onError={(e) => e.target.src = '/assets/zorro-logo.jpg'} />
                <div className="blog-item-info">
                  <h3>{blog.title}</h3>
                  <p>{blog.date}</p>
                </div>
                <div className="blog-item-actions">
                  <button onClick={() => handleEdit(blog)} className="btn-edit" disabled={isLoading}>✎</button>
                  <button onClick={() => handleDelete(blog.id)} className="btn-delete" disabled={isLoading}>🗑</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
