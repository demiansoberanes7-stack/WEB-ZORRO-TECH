import { Link } from 'react-router-dom';
import { logos, gallery } from './lumarkAssets';
import './ContenidoMultimedia.css';

const WHATSAPP = 'https://wa.me/526645495385?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20m%C3%A1s%20contenido%20multimedia%20para%20mi%20negocio.';

export default function ContenidoMultimedia() {
  return (
    <div className="lm-page">
      <header className="lm-topbar">
        <Link to="/" className="lm-topbar__brand" aria-label="Zorro Tech, inicio">Zorro<span>Tech</span></Link>
        <Link to="/" className="lm-topbar__back"><img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/arrow-left.svg" alt="" aria-hidden="true" /> Volver al inicio</Link>
      </header>

      <section className="lm-hero">
        <div className="lm-container lm-hero__container">
          <div className="lm-hero__content lm-fade-up">
            <div className="lm-badge">NUESTRO PORTAFOLIO</div>
            <h1 className="lm-hero__title">
              Descubre nuestras ideas<br />
              <span className="lm-highlight">Excepcionales</span>
            </h1>
            <p className="lm-hero__description">
              Explora nuestros casos de éxito y conoce la calidad, creatividad y
              estrategia que aplicamos en cada proyecto.
            </p>
            <div className="lm-hero__buttons">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lm-btn lm-btn--light">Escríbenos por WhatsApp</a>
            </div>
          </div>
          <div className="lm-hero__image-wrapper lm-fade-left">
            <img src="/assets/portafolio-multimedia/hero.png" alt="Kit de herramientas digitales" className="lm-hero__image" loading="eager" />
          </div>
        </div>
      </section>

      <section className="lm-video-block">
        <div className="lm-container lm-video-container">
          <div className="lm-video-card lm-hover-lift">
            <h2 className="lm-card-title">Contenido visual que<br /><span className="lm-highlight-white">Cautiva</span></h2>
            <p className="lm-card-description">
              Creamos videos dinámicos y atractivos, diseñados específicamente para dominar las redes sociales y
              marca.
            </p>
          </div>
          <div className="lm-video-wrapper">
            <video src="/assets/portafolio-multimedia/media/6a3704c26a6dd1b69a5da628.mp4" autoPlay loop muted playsInline className="lm-showcase-video" />
          </div>
        </div>
      </section>

      <section className="lm-video-block lm-video-block--alt">
        <div className="lm-container lm-video-container lm-video-container--alt">
          <div className="lm-video-card lm-video-card--alt lm-hover-lift">
            <h2 className="lm-card-title lm-card-title--alt">Soluciones que<br /><span className="lm-highlight-white">Transforman</span></h2>
            <p className="lm-card-description">
              Analizamos tus necesidades para ofrecerte estrategias efectivas que impulsan el crecimiento de tu negocio.
            </p>
          </div>
          <div className="lm-video-wrapper lm-video-wrapper--ltr">
            <video src="/assets/portafolio-multimedia/video-estrategias.mp4" autoPlay loop muted playsInline className="lm-showcase-video lm-showcase-video--large" />
          </div>
        </div>
      </section>

      <section className="lm-logos-block" aria-label="Clientes">
        <div className="lm-logos-slider">
          <div className="lm-logos-track">
            {[...logos, ...logos].map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt={`Cliente ${index % logos.length + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section className="lm-gallery-block">
        <div className="lm-container lm-container--block">
          <div className="lm-title-box">
            <h2 className="lm-section-title">Galería de Diseños</h2>
          </div>
          <div className="lm-gallery-masonry">
            {gallery.map((item, index) => (
              <div className="lm-gallery-item" key={`${item.src}-${index}`}>
                {item.type === 'video'
                  ? <video src={item.src} autoPlay loop muted playsInline loading="lazy" />
                  : <img src={item.src} alt="Diseño" loading="lazy" />}
              </div>
            ))}
          </div>
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
