import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
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
        const response = await fetch('https://raw.githubusercontent.com/demiansoberanes7-stack/WEB-ZORRO-TECH/main/src/data/blogs.json?t=' + new Date().getTime());
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

  // Componentes animados para el contenido Markdown
  const MotionText = ({ children, tag: Tag = 'p' }) => {
    const MotionTag = motion[Tag];
    return (
      <MotionTag
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </MotionTag>
    );
  };

  return (
    <div className="lm-page">
      <header className="lm-topbar">
        <Link to="/" className="lm-topbar__brand" aria-label="Zorro Tech, inicio">Zorro<span>Tech</span></Link>
        <Link to="/blog" className="lm-topbar__back"><img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/arrow-left.svg" alt="" aria-hidden="true" /> Volver al Blog</Link>
      </header>

      <article className="blog-post-article">
        <div className="blog-post-header">
          <div className="lm-container">
            <motion.span 
              className="blog-date"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >{blog.date}</motion.span>
            <motion.h1 
              className="blog-post-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >{blog.title}</motion.h1>
            {blog.tags && (
              <motion.div
                className="blog-tags"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                style={{ marginTop: '16px' }}
              >
                {blog.tags.split(',').map(tag => (
                  <span key={tag.trim()} className="blog-tag">{tag.trim()}</span>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <motion.div 
          className="blog-post-cover-wrapper lm-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img src={blog.coverUrl} alt={blog.title} className="blog-post-cover" onError={(e) => e.target.src = '/assets/zorro-logo.jpg'} />
        </motion.div>

        <div className="blog-post-content lm-container">
          <div className="blog-post-description">
            <ReactMarkdown
              components={{
                p: ({node, ...props}) => <MotionText tag="p" {...props} />,
                h1: ({node, ...props}) => <MotionText tag="h1" {...props} />,
                h2: ({node, ...props}) => <MotionText tag="h2" {...props} />,
                h3: ({node, ...props}) => <MotionText tag="h3" {...props} />,
                ul: ({node, ...props}) => <MotionText tag="ul" {...props} />,
                ol: ({node, ...props}) => <MotionText tag="ol" {...props} />,
                img: ({node, ...props}) => <MotionText tag="img" {...props} />,
              }}
            >
              {blog.content || blog.description}
            </ReactMarkdown>
          </div>
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
