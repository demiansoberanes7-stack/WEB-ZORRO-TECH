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
  'Mantenimiento PC',
  'Webservices',
  'Capacitaciones',
  'Invitaciones',
  'Computadoras',
  'Accesorios',
];
const audiences = [
  { title: 'Emprendedores y pequeños negocios', text: 'Dale presencia a tu negocio con un sitio web, publicidad y contenido para redes sociales. Te ayudamos a mostrar lo que ofreces y facilitar el contacto con tus clientes.' },
  { title: 'Personas que celebran momentos importantes', text: 'Haz especial tu próxima celebración con una invitación digital o una canción creada para ti. Dale un toque personal a cumpleaños, bodas, aniversarios y esos momentos que quieres recordar.' },
  { title: 'Personas que dependen de su computadora', text: '¿Tu computadora necesita mantenimiento o buscas equipo y accesorios? Te ayudamos a cuidar tu PC y elegir lo que necesitas para trabajar, estudiar o disfrutar de tus actividades sin complicaciones.' },
];

function Doodle({ index }) {
  return <svg className="zt-audience__icon" viewBox="0 0 104 104" fill="none" aria-hidden="true">
    {index === 0 && <>
      <circle cx="52" cy="52" r="34" stroke="#fff" strokeWidth="4" />
      <path d="M40 46v4M64 46v4" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
      <path d="M38 62c8 9 20 9 28 0" stroke="#FC69FF" strokeWidth="5" strokeLinecap="round" />
      <path d="M92 24l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10z" fill="#ffd166" />
      <path d="M14 74l3 7.5L24.5 84 17 87l-3 7.5L11 87 3.5 84 11 81.5 14 74z" fill="#b094ff" />
    </>}
    {index === 1 && <>
      <rect x="16" y="34" width="72" height="50" rx="8" stroke="#fff" strokeWidth="4" />
      <path d="M40 34v-6a8 8 0 018-8h8a8 8 0 018 8v6" stroke="#fff" strokeWidth="4" />
      <path d="M16 54h72" stroke="#FC69FF" strokeWidth="4" />
      <circle cx="52" cy="54" r="5" fill="#b094ff" />
      <path d="M90 16l3 7.5 7.5 3-7.5 3-3 7.5-3-7.5-7.5-3 7.5-3 3-7.5z" fill="#ffd166" />
    </>}
    {index === 2 && <>
      <path d="M20 50L52 24l32 26M28 48v28h48V48" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="44" y="58" width="16" height="18" rx="3" stroke="#FC69FF" strokeWidth="4" />
      <path d="M78 78c8 2 14 8 16 16" stroke="#b094ff" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 8" />
    </>}
  </svg>;
}

export default function AudienceSection() {
  return <section className="zt-dark zt-audience-section" id="para-quien" aria-labelledby="audience-heading">
    <div className="zt-trusted">
      <p>Conoce todos nuestros servicios</p>
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
        {audiences.map((audience, index) => <Reveal className="zt-audience__card" key={audience.title}>
          <Doodle index={index} /><h3>{audience.title}</h3><p>{audience.text}</p>
        </Reveal>)}
      </div>
      <Reveal><p className="zt-audience__hint">Encuentra el perfil con el que más te identificas</p></Reveal>
    </div>
  </section>;
}
