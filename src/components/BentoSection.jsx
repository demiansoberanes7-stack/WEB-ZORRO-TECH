import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './DarkSection.css';
import './BentoSection.css';

const ICON_CDN = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/';

const CAMPANAS_MSG = encodeURIComponent('Comprendo que la información financiera de otras empresas es sensible, así que seguiremos la conversación por aquí con los permisos aceptados de los clientes');

const cards = [
  {
    title: 'Tu espacio en internet', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/globe.svg', gradient: 'blue', preview: 'web',
    text: 'Construimos juntos un sitio web que refleje la identidad de tu negocio. Te explicamos cada paso para que te sientas seguro y orgulloso de tu nueva presencia digital.',
    tags: ['Sitios web', 'Landing pages', 'Diseño responsive'],
    action: { label: 'Ver ejemplos', to: '/portafolio-web' },
  },
  {
    title: 'Comunicación que conecta', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/video.svg', gradient: 'indigo', flip: true, preview: 'media',
    text: 'Te ayudamos a contar tu historia de forma visual. Ya sea con video o diseño, trabajamos contigo para que tu mensaje llegue de forma natural a las personas correctas.',
    tags: ['Diseño', 'Video', 'Redes sociales'],
    action: { label: 'Explorar contenido', to: '/contenido-multimedia' },
  },
  {
    title: 'Organización sin estrés', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/users.svg', gradient: 'magenta', preview: 'crm',
    text: 'Llevar el control de los contactos puede ser abrumador. Estamos desarrollando una herramienta (CRM) para ayudarte a dar seguimiento a tus clientes sin que sientas que pierdes el control.',
    tags: ['Contactos', 'Seguimiento', 'Automatización'],
    action: { label: 'Ver detrás de cámaras', href: 'https://github.com/demiansoberanes7-stack/crm-lumarketing' },
  },
  {
    title: 'Publicidad con sentido', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/bullhorn.svg', gradient: 'violet', flip: true, preview: 'campaigns',
    text: 'Invertir en publicidad no debería ser una apuesta ciega. Te guiamos en el proceso para crear campañas honestas que acerquen tu producto a quienes realmente lo valoran.',
    tags: ['Publicidad', 'Estrategia', 'Conversión'],
    action: { label: 'Platiquemos de tu negocio', href: `https://wa.me/526645495385?text=${CAMPANAS_MSG}` },
  },
  {
    title: 'La cara detrás del trabajo', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/briefcase.svg', gradient: 'blue', wide: true, preview: 'career',
    text: 'Soy Axel Demian. Mi objetivo es escucharte, entender qué necesitas (ya sea reparar tu equipo o hacer una campaña) y acompañarte para que la tecnología sea tu aliada, no un dolor de cabeza.',
    tags: ['Desarrollo web', 'Soporte TI', 'Marketing digital'],
    action: { label: 'Descargar Trayectoria (PDF)', href: '/assets/docs/CV_Axel_Demian_Soberanes_ATS_Espanol.pdf' },
  },
];

function CardAction({ action }) {
  if (!action) return null;
  const className = 'zt-bento__cta';
  if (action.to) return <Link className={className} to={action.to}>{action.label}<img src={`${ICON_CDN}arrow-right.svg`} alt="" aria-hidden="true" /></Link>;
  const external = action.href.startsWith('http');
  return <a className={className} href={action.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{action.label}{external ? <img src={`${ICON_CDN}arrow-trend-up.svg`} alt="" aria-hidden="true" /> : <img src={`${ICON_CDN}arrow-down.svg`} alt="" aria-hidden="true" />}</a>;
}

function Mockup({ card }) {
  return <div className={`zt-portfolio-preview zt-portfolio-preview--${card.preview}`}>
    <div className="zt-preview-toolbar"><span className="zt-preview-dots"><i /><i /><i /></span><span>{card.preview === 'crm' ? 'En desarrollo' : 'Vista ilustrativa'}</span></div>
    {card.preview === 'web' && <div className="zt-preview-web">
      <span className="zt-preview-eyebrow">TU MARCA · TU ESPACIO</span>
      <strong>Tu negocio,<br />en digital.</strong>
      <div className="zt-preview-lines"><i /><i /></div>
      <div className="zt-preview-tiles"><i /><i /><i /></div>
    </div>}
    {card.preview === 'media' && <div className="zt-preview-media">
      {['Diseño', 'Video', 'Redes'].map((label, index) => <div key={label}><span>{['✦', '▷', '◎'][index]}</span><b>{label}</b></div>)}
    </div>}
    {card.preview === 'crm' && <div className="zt-preview-board">
      {['Contactos', 'Seguimiento', 'Tareas'].map(label => <div key={label}><b>{label}</b>{[0, 1, 2].map(i => <div className="zt-preview-task" key={i}><i /><i /></div>)}</div>)}
    </div>}
    {card.preview === 'campaigns' && <div className="zt-preview-campaign">
      <span className="zt-preview-eyebrow">DE LA IDEA AL MENSAJE</span><strong>Haz que<br />te conozcan.</strong>
      <div className="zt-preview-stages"><span>Objetivo</span><span>Creatividad</span><span>Difusión</span></div>
    </div>}
    {card.preview === 'career' && <div className="zt-preview-career">
      {card.tags.map((tag, index) => <div key={tag}><span>{index === 2 ? <svg viewBox="0 0 576 512" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg> : ['</>', '⌘'][index]}</span><div><b>{tag}</b><div className="zt-preview-lines"><i /><i /></div></div></div>)}
    </div>}
    <div className="zt-preview-tags">{card.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </div>;
}

export default function BentoSection() {
  return <section className="zt-dark zt-bento-section" id="portafolio" aria-labelledby="bento-heading">
    <div className="zt-container">
      <Reveal>
        <h2 className="zt-visually-hidden" id="bento-heading">Conoce nuestro portafolio</h2>
      </Reveal>
      <div className="zt-bento">
        {cards.map((card, i) => <Reveal
          key={card.title}
          delay={i * 0.08}
          direction={card.flip ? 'right' : 'left'}
          className={`zt-bento__card zt-bento__card--${card.gradient}${card.flip ? ' zt-bento__card--flip' : ''}${card.wide ? ' zt-bento__card--wide' : ''}`}
        >
          <div className="zt-bento__copy">
            <div className="zt-bento__head">
              <span className="zt-bento__icon zt-bento__glyph" aria-hidden="true"><img src={card.icon} alt="" /></span>
              <h3>{card.title}</h3>
            </div>
            <p>{card.text}</p>
            <CardAction action={card.action} />
          </div>
          <div className="zt-bento__shot" role="img" aria-label={`Ejemplo ilustrativo: ${card.title}`}><div aria-hidden="true"><Mockup card={card} /></div></div>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
