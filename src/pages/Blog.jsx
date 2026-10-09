import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ContenidoMultimedia.css';
import './Blog.css';

const WHATSAPP = 'https://wa.me/526645495385?text=Hola%2C%20quiero%20más%20información%20sobre%20el%20blog%20de%20Zorro%20Tech.';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/demiansoberanes7-stack/WEB-ZORRO-TECH/main/src/data/blogs.json?t=' + new Date().getTime(), {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        });
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        }
      } catch (error) {
        console.error('Error cargando los blogs:', error);
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
        <div className="blog-header-inner">
          <p className="blog-header-hint">Explora artículos de enseñanza, teorías y conceptos clave de las ciencias</p>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="blog-grid-container">
          {loading ? (
            <p style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem' }}>Cargando artículos...</p>
          ) : blogs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h2>Aún no hay artículos publicados.</h2>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map(blog => (
                <article key={blog.id} className="blog-card">
                  <div className="blog-card-image">
                    <img
                      src={blog.coverUrl}
                      alt={blog.title}
                      onError={(e) => e.target.src = '/assets/zorro-logo.jpg'}
                    />
                  </div>
                  <div className="blog-card-content">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-card-date">{blog.date}</p>
                    <p className="blog-description">{blog.description}</p>
                    <div className="blog-tags">
                      <span className="blog-tag">Tecnología</span>
                      <span className="blog-tag">Zorro Tech</span>
                    </div>
                    <Link to={`/blog/${blog.id}`} className="blog-btn">
                      Leer artículo ↗
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
