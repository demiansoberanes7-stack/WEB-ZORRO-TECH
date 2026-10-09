import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ContenidoMultimedia.css';
import './Blog.css';

const WHATSAPP = 'https://wa.me/526645495385?text=Hola%2C%20quiero%20recibir%20novedades%20del%20blog%20de%20Zorro%20Tech.';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtenemos los blogs directamente desde la nube de GitHub en tiempo real
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/demiansoberanes7-stack/WEB-ZORRO-TECH/main/src/data/blogs.json' + '?t=' + new Date().getTime());
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error('Error cargando los blogs desde la nube:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="lm-page">
      <header className="lm-topbar">
        <Link to="/" className="lm-topbar__brand" aria-label="Zorro Tech, inicio">Zorro<span>Tech</span></Link>
        <Link to="/" className="lm-topbar__back"><img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/arrow-left.svg" alt="" aria-hidden="true" /> Volver al inicio</Link>
      </header>

      <section className="blog-header-section">
        <div className="lm-container">
          <div className="lm-badge">BLOG DE ZORRO TECH</div>
          <h1 className="lm-hero__title" style={{ marginTop: '15px' }}>
            Ideas, consejos y<br />
            <span className="lm-highlight">tecnología</span>
          </h1>
          <p className="lm-hero__description" style={{ maxWidth: '600px', margin: '20px auto 0' }}>
            Explora nuestros artículos sobre sitios web, herramientas digitales y estrategias para hacer crecer tu negocio en internet.
          </p>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="lm-container">
          {loading ? (
            <p style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem' }}>Cargando artículos desde la nube...</p>
          ) : blogs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h2>Aún no hay artículos publicados.</h2>
              <p>Vuelve pronto para leer nuestro contenido.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map(blog => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-card-image">
                    <img src={blog.coverUrl} alt={blog.title} onError={(e) => e.target.src = '/assets/zorro-logo.jpg'} />
                  </div>
                  <div className="blog-card-content">
                    <span className="blog-date">{blog.date}</span>
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-description">{blog.description}</p>
                    <Link to={`/blog/${blog.id}`} className="blog-read-more">
                      Leer artículo completo →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

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
