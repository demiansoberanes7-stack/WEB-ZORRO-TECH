import Reveal from './Reveal';
import './DarkSection.css';
import './AudienceSection.css';

const services = [
  'Automatizaciones',
  'Sitios web',
  'Publicidad',
  'Soporte TI empresarial',
  'Chatbots',
  'Redes sociales',
  'Mantenimiento de cómputo',
  'Webservices',
  'Capacitaciones',
  'Invitaciones',
  'Computadoras',
  'Accesorios',
];
const audiences = [
  { title: 'Dueños de negocios buscando claridad', text: 'Si sientes que la tecnología avanza muy rápido, estamos aquí para traducir lo complejo a lo sencillo. Juntos podemos construir un sitio web o campañas que realmente reflejen el valor de lo que haces.' },
  { title: 'Creadores de momentos importantes', text: 'Te ayudamos a darle un toque personal a tus eventos con una invitación digital interactiva o una canción original. Trabajaremos a tu lado para que esa boda, cumpleaños o aniversario sea inolvidable.' },
  { title: 'Profesionales que dependen de su equipo', text: 'Cuando tu equipo falla, puede ser frustrante. Te guiamos con honestidad para elegir el mantenimiento o los accesorios correctos, para que puedas trabajar o estudiar con total tranquilidad.' },
];

function Doodle({ index }) {
  return <svg className="zt-audience__icon" viewBox="0 0 104 104" fill="none" aria-hidden="true">
    {index === 0 && <>
      <circle cx="52" cy="52" r="34" stroke="#111" strokeWidth="4" />
      <path d="M40 46v4M64 46v4" stroke="#111" strokeWidth="5" strokeLinecap="round" />
      <path d="M38 62c8 9 20 9 28 0" stroke="#ff6b2b" strokeWidth="5" strokeLinecap="round" />
      <path d="M92 24l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#ff6b2b" />
      <path d="M14 74l3 7.5L24.5 84 17 87l-3 7.5L11 87 3.5 84 11 81.5 14 74z" fill="#e65100" />
    </>}
    {index === 1 && <>
      <rect x="16" y="34" width="72" height="50" rx="8" stroke="#111" strokeWidth="4" />
      <path d="M40 34v-6a8 8 0 018-8h8a8 8 0 018 8v6" stroke="#111" strokeWidth="4" />
      <path d="M16 54h72" stroke="#ff6b2b" strokeWidth="4" />
      <circle cx="52" cy="54" r="5" fill="#e65100" />
      <path d="M90 16l3 7.5 7.5 3-7.5 3-3 7.5-3-7.5-7.5-3 7.5-3 3-7.5z" fill="#ff6b2b" />
    </>}
    {index === 2 && <>
      <path d="M20 50L52 24l32 26M28 48v28h48V48" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="44" y="58" width="16" height="18" rx="3" stroke="#ff6b2b" strokeWidth="4" />
      <path d="M78 78c8 2 14 8 16 16" stroke="#e65100" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" />
    </>}
  </svg>;
}

export default function AudienceSection() {
  return <section className="zt-dark zt-audience-section" id="para-quien" aria-labelledby="audience-heading">
    <div className="zt-trusted">

      <div className="zt-marquee">
        <div className="zt-marquee__track">
          {[0, 1].map(copy => <div className="zt-marquee__group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {services.map(service => <span className="zt-brand-chip" key={service}><span aria-hidden="true" />{service}</span>)}
          </div>)}
        </div>
      </div>
    </div>
    <div className="zt-container">
      <Reveal><h2 className="zt-heading" id="audience-heading">¿Para quién es Zorro Tech?</h2></Reveal>
      <div className="zt-audience">
        {audiences.map((audience, index) => <Reveal className="zt-audience__card" key={audience.title} delay={index * 0.12} direction="up">
          <Doodle index={index} /><h3>{audience.title}</h3><p>{audience.text}</p>
        </Reveal>)}
      </div>
      <Reveal delay={0.2}><p className="zt-audience__hint">Encuentra el perfil con el que más te identificas</p></Reveal>
    </div>
  </section>;
}
