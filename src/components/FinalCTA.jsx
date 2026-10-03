import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './FinalCTA.css';
import Brand from './Brand';

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, -15]);
  return <section ref={ref} className="final-cta" id="preorder">
    <div className="final-cta__content">
      <h2>Pon tu negocio en digital.</h2>
      <motion.img className="final-cta__device-img" src="/assets/Zorro/zorro-notas.png" alt="Zorro con lentes, mascota de Zorro Tech" style={{ rotate }} loading="lazy" />
      <a className="button final-cta__button" href="https://wa.me/526645495385?text=Hola%2C%20me%20interesa%20comenzar%20con%20sus%20servicios." target="_blank" rel="noopener noreferrer">Quiero comenzar</a>
      <p className="final-cta__terms">Empieza con lo que necesitas hoy.<br />Nosotros te ayudamos a crecer después.</p>
    </div>
    <footer className="footer">
      <p>Sitios web · Invitaciones digitales · Mantenimiento de cómputo<br />Tijuana, Baja California</p>
      <a href="#top" className="footer__logo" aria-label="Zorro Tech, volver al inicio"><Brand /></a>
      <p><a href="https://wa.me/526645495385" target="_blank" rel="noopener noreferrer">WhatsApp</a> · <span aria-disabled="true">Instagram</span> · <span aria-disabled="true">Facebook</span></p>
    </footer>
  </section>;
}
