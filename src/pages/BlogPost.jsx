import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ContenidoMultimedia.css';
import './Blog.css';

const WHATSAPP = 'https://wa.me/526645495385?text=Hola%2C%20quiero%20más%20información%20sobre%20un%20artículo%20de%20su%20blog.';

export default function BlogPost() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/demiansoberanes7-stack/WEB-ZORRO-TECH/main/src/data/blogs.json' + '?t=' + new Date().getTime());
        if (response.ok) {
          const data = await response.json();
          const found = data.find(b => b.id === id);
          setBlog(found);
        }
      } catch (error) {
        console.error('Error cargando el blog:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="lm-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h2>Cargando artículo...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="lm-page" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Artículo no encontrado</h2>
        <Link to="/blog" className="lm-btn lm-btn--light" style={{ marginTop: '20px' }}>Volver al Blog</Link>
      </div>
    );
  }

  return (
    <div className="lm-page">
      <header className="lm-topbar">
        <Link to="/" className="lm-topbar__brand" aria-label="Zorro Tech, inicio">Zorro<span>Tech</span></Link>
        <Link to="/blog" className="lm-topbar__back"><img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/arrow-left.svg" alt="" aria-hidden="true" /> Volver al Blog</Link>
      </header>

      <article className="blog-post-article">
        <div className="blog-post-header">
          <div className="lm-container">
            <span className="blog-date">{blog.date}</span>
            <h1 className="blog-post-title">{blog.title}</h1>
          </div>
        </div>

        <div className="blog-post-cover-wrapper lm-container">
          <img src={blog.coverUrl} alt={blog.title} className="blog-post-cover" onError={(e) => e.target.src = '/assets/zorro-logo.jpg'} />
        </div>

        <div className="blog-post-content lm-container">
          <p className="blog-post-description" style={{ whiteSpace: 'pre-wrap' }}>
            {blog.content || blog.description}
          </p>
        </div>
      </article>

      <footer className="lm-footer">
        <p>© {new Date().getFullYear()} Zorro Tech · Tijuana</p>
        <div className="lm-footer__links">
          <Link to="/">Inicio</Link>
          <Link to="/portafolio-web">Portafolio web</Link>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
