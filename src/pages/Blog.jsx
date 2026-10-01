import { Link } from 'react-router-dom';
import './ContenidoMultimedia.css';

const WHATSAPP = 'https://wa.me/526645495385?text=Hola%2C%20quiero%20recibir%20novedades%20del%20blog%20de%20Zorro%20Tech.';

export default function Blog() {
  return (
    <div className="lm-page">
      <header className="lm-topbar">
        <Link to="/" className="lm-topbar__brand" aria-label="Zorro Tech, inicio">Zorro<span>Tech</span></Link>
        <Link to="/" className="lm-topbar__back"><img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/arrow-left.svg" alt="" aria-hidden="true" /> Volver al inicio</Link>
      </header>

      <section className="lm-hero">
        <div className="lm-container lm-hero__container">
          <div className="lm-hero__content lm-fade-up">
            <div className="lm-badge">BLOG</div>
            <h1 className="lm-hero__title">
              Ideas y consejos<br />
              <span className="lm-highlight">muy pronto</span>
            </h1>
            <p className="lm-hero__description">
              Estamos preparando artículos sobre tecnología, sitios web y
              estrategia digital para tu negocio. Esta sección estará disponible
              en unos días.
            </p>
            <div className="lm-hero__buttons">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="lm-btn lm-btn--light">Avísame cuando esté listo</a>
            </div>
          </div>
          <div className="lm-hero__image-wrapper lm-fade-left">
            <img src="/assets/zorro-logo.jpg" alt="Zorro Tech" className="lm-hero__image" loading="eager" />
          </div>
        </div>
      </section>

      <footer className="lm-footer">
        <p>© {new Date().getFullYear()} Zorro Tech · Tijuana</p>
        <div className="lm-footer__links">
          <Link to="/">Inicio</Link>
          <Link to="/portafolio-web">Portafolio web</Link>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
