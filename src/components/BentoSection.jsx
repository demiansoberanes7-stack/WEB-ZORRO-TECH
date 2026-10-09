import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './DarkSection.css';
import './BentoSection.css';

const ICON_CDN = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/';

const CAMPANAS_MSG = encodeURIComponent('Comprendo que la información financiera de otras empresas es sensible, así que seguiremos la conversación por aquí con los permisos aceptados de los clientes');

const cards = [
  {
    title: 'Tu negocio, abierto 24/7', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/globe.svg', gradient: 'blue', preview: 'web',
    text: 'Más que un sitio web, diseñamos una herramienta comercial que genera confianza. Rápido, atractivo en celulares y pensado para que tus visitantes decidan comprar o contactarte.',
    tags: ['Sitios web', 'Landing pages', 'Diseño responsive'],
    action: { label: 'Ver casos reales', to: '/portafolio-web' },
  },
  {
    title: 'Comunicación que conecta', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/video.svg', gradient: 'indigo', flip: true, preview: 'media',
    text: 'La gente no lee anuncios, consume historias. Creamos contenido multimedia, videos y piezas visuales que hacen que tu marca deje de ser invisible en redes sociales.',
    tags: ['Diseño', 'Video', 'Redes sociales'],
    action: { label: 'Explorar contenido', to: '/contenido-multimedia' },
  },
  {
    title: 'Control total (CRM)', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/users.svg', gradient: 'magenta', preview: 'crm',
    text: '¿Pierdes clientes por olvidar responderles? Estamos creando un sistema para organizar tus contactos y seguimientos. Para que te enfoques en vender y el sistema haga el resto.',
    tags: ['Contactos', 'Seguimiento', 'Automatización'],
    action: { label: 'Ver detrás de cámaras (GitHub)', href: 'https://github.com/demiansoberanes7-stack/crm-lumarketing' },
  },
  {
    title: 'Campañas de resultados', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/bullhorn.svg', gradient: 'violet', flip: true, preview: 'campaigns',
    text: 'No cobramos por conseguirte "likes". Diseñamos estrategias enfocadas en que personas reales conozcan tu producto y te envíen un mensaje interesadas en comprar.',
    tags: ['Publicidad', 'Estrategia', 'Conversión'],
    action: { label: 'Cuéntame de tu negocio', href: `https://wa.me/526645495385?text=${CAMPANAS_MSG}` },
  },
  {
    title: 'La cara detrás del código', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/briefcase.svg', gradient: 'blue', wide: true, preview: 'career',
    text: 'Soy Axel Demian. Conecto el desarrollo web, el soporte de TI y la psicología del consumidor para darte soluciones que realmente entiendas y hagan crecer tu negocio.',
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
