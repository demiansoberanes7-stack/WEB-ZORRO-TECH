import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './DarkSection.css';
import './BentoSection.css';

const ICON_CDN = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/';

const CAMPANAS_MSG = encodeURIComponent('Comprendo que la información financiera de otras empresas es sensible, así que seguiremos la conversación por aquí con los permisos aceptados de los clientes');

const cards = [
  {
    title: 'Portafolio web', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/globe.svg', gradient: 'blue', preview: 'web',
    text: 'Conoce nuestra propuesta de sitios web: diseños claros, adaptados a celulares y pensados para presentar tu negocio.',
    tags: ['Sitios web', 'Landing pages', 'Diseño responsive'],
    action: { label: 'Ver sitios web', to: '/portafolio-web' },
  },
  {
    title: 'Contenido multimedia', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/video.svg', gradient: 'indigo', flip: true, preview: 'media',
    text: 'Dale una mirada al lado creativo: diseño, video y contenido para comunicar tu marca en redes sociales y medios digitales.',
    tags: ['Diseño', 'Video', 'Redes sociales'],
    action: { label: 'Ver contenido multimedia', to: '/contenido-multimedia' },
  },
  {
    title: 'CRM en desarrollo', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/users.svg', gradient: 'magenta', preview: 'crm',
    text: 'Conoce el enfoque de nuestro CRM en desarrollo: organizar contactos, dar seguimiento a oportunidades y simplificar tareas en un solo lugar.',
    tags: ['Contactos', 'Seguimiento', 'Automatización'],
    action: { label: 'Ver en GitHub', href: 'https://github.com/demiansoberanes7-stack/crm-lumarketing' },
  },
  {
    title: 'Campañas realizadas', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/bullhorn.svg', gradient: 'violet', flip: true, preview: 'campaigns',
    text: 'Conoce cómo combinamos estrategia, mensajes y piezas creativas para dar visibilidad a los negocios y acercarlos a sus clientes.',
    tags: ['Publicidad', 'Estrategia', 'Creatividad'],
    action: { label: 'Hablar por WhatsApp', href: `https://wa.me/526645495385?text=${CAMPANAS_MSG}` },
  },
  {
    title: 'Trayectoria Laboral', icon: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/briefcase.svg', gradient: 'blue', wide: true, preview: 'career',
    text: 'Conoce el perfil detrás de Zorro Tech y las áreas que conectamos para ayudarte: desarrollo web, soporte técnico y comunicación digital.',
    tags: ['Desarrollo web', 'Soporte TI', 'Marketing digital'],
    action: { label: 'Descargar CV (PDF)', href: '/docs/CV_Axel_Demian_Soberanes_ATS_Espanol.pdf' },
  },
];

function CardAction({ action }) {
  if (!action) return null;
  const className = 'zt-bento__cta';
  if (action.to) return <Link className={className} to={action.to}>{action.label}<img src={`${ICON_CDN}arrow-right.svg`} alt="" aria-hidden="true" /></Link>;
  const external = action.href.startsWith('http');
  return <a className={className} href={action.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{action.label}{external ? <img src={`${ICON_CDN}arrow-up-right-from-square.svg`} alt="" aria-hidden="true" /> : <img src={`${ICON_CDN}arrow-down.svg`} alt="" aria-hidden="true" />}</a>;
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
      {card.tags.map((tag, index) => <div key={tag}><span>{index === 2 ? <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg> : ['</>', '⌘'][index]}</span><div><b>{tag}</b><div className="zt-preview-lines"><i /><i /></div></div></div>)}
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
        {cards.map(card => <Reveal key={card.title} className={`zt-bento__card zt-bento__card--${card.gradient}${card.flip ? ' zt-bento__card--flip' : ''}${card.wide ? ' zt-bento__card--wide' : ''}`}>
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
