import { Link } from 'react-router-dom';
import './ContenidoMultimedia.css';
import './PortafolioWeb.css';

const WHATSAPP = 'https://wa.me/526645495385?text=Hola%2C%20quiero%20un%20sitio%20web%20para%20mi%20negocio.';

const sites = [
  {
    title: 'Tiger Constructora',
    url: 'https://tigerconstructora.com/',
    host: 'tigerconstructora.com',
    image: '/assets/tiger.png',
    text: 'Sitio corporativo para una empresa de construcción en Tijuana: servicios, proyectos y llamadas a cotizar.',
    tags: ['Sitio corporativo', 'Tijuana', 'Diseño responsive'],
  },
  {
    title: 'Invitación digital',
    url: 'https://springgreen-raven-177786.hostingersite.com/',
    host: 'springgreen-raven-177786.hostingersite.com',
    image: '/assets/springgreen.png',
    text: 'Invitación digital animada: un sobre que se abre para revelar el mensaje de tu evento, lista para compartir por WhatsApp.',
    tags: ['Invitaciones', 'Animación', 'Móvil primero'],
  },
  {
    title: 'Persianas Casa Smart',
    url: 'https://aqua-wombat-951532.hostingersite.com/',
    host: 'aqua-wombat-951532.hostingersite.com',
    image: '/assets/lumark-persianas.png',
    text: 'Sitio informativo y catálogo de productos para persianas y protección solar.',
    tags: ['Catálogo', 'Productos', 'Responsive'],
  },
  {
    title: 'Romo Asistencia Vial',
    url: 'https://steelblue-okapi-699465.hostingersite.com/',
    host: 'steelblue-okapi-699465.hostingersite.com',
    image: '/assets/lumark-romo.png',
    text: 'Servicio de grúas y asistencia vial: cobertura, contacto rápido y llamadas a emergencia.',
    tags: ['Servicios', 'Asistencia vial', 'Responsive'],
  },
  {
    title: 'Prosesu',
    url: 'https://mediumspringgreen-heron-793370.hostingersite.com',
    host: 'mediumspringgreen-heron-793370.hostingersite.com',
    image: '/assets/lumark-prosesu.png',
    text: 'Sitio informativo de servicios profesionales con presencia en línea y datos de contacto.',
    tags: ['Institucional', 'Servicios', 'Responsive'],
  },
  {
    title: 'TecnoProtec',
    url: 'https://tecnoprotec.com/',
    host: 'tecnoprotec.com',
    image: '/assets/lumark-tecnoprotec.png',
    text: 'Cámaras de seguridad y videovigilancia: productos, planes y soporte técnico.',
    tags: ['Cámaras', 'Seguridad', 'Responsive'],
  },
];

export default function PortafolioWeb() {
  return (
    <div className="pw-page">
      <header className="lm-topbar">
        <Link to="/" className="lm-topbar__brand" aria-label="Zorro Tech, inicio">Zorro<span>Tech</span></Link>
        <Link to="/" className="lm-topbar__back"><img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/arrow-left.svg" alt="" aria-hidden="true" /> Volver al inicio</Link>
      </header>

      <section className="pw-hero">
        <div className="pw-container">
          <div className="lm-badge">PORTAFOLIO WEB</div>
          <h1 className="pw-hero__title">
            Sitios web que<br />
            <span className="lm-highlight">ya están en línea</span>
          </h1>
          <p className="pw-hero__description">
            Dale clic a cualquiera de ellos y conoce de primera mano el trabajo que hemos entregado.
          </p>
        </div>
      </section>

      <section className="pw-sites" aria-labelledby="pw-sites-heading">
        <div className="pw-container">
          <h2 id="pw-sites-heading" className="pw-sites__heading">Todos los sitios</h2>
          <p className="pw-sites__hint">Haz clic en la información de tu interés</p>
          <div className="pw-grid">
            {sites.map(site => (
              <article className="pw-card" key={site.url}>
                <a className="pw-card__shot" href={site.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${site.title}`}>
                  <img src={site.image} alt={`Vista previa de ${site.title}`} loading="lazy" />
                </a>
                <div className="pw-card__body">
                  <h3>{site.title}</h3>
                  <span className="pw-card__host">{site.host}</span>
                  <p>{site.text}</p>
                  <div className="pw-card__tags">
                    {site.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                  <a className="pw-card__cta" href={site.url} target="_blank" rel="noreferrer">Visitar sitio <img src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/arrow-trend-up.svg" alt="" aria-hidden="true" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pw-cta">
        <div className="pw-container pw-cta__inner">
          <h2>¿Quieres uno para tu negocio?</h2>
          <a className="lm-btn lm-btn--light" href={WHATSAPP} target="_blank" rel="noreferrer">Escríbenos por WhatsApp</a>
        </div>
      </section>

      <footer className="lm-footer">
        <p>© {new Date().getFullYear()} Zorro Tech · Tijuana</p>
        <div className="lm-footer__links">
          <Link to="/">Inicio</Link>
          <Link to="/contenido-multimedia">Contenido multimedia</Link>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
