import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './FinalCTA.css';
import Brand from './Brand';
import Reveal from './Reveal';

export default function FinalCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, -15]);

  return (
    <section ref={ref} className="final-cta" id="preorder">
      <div className="final-cta__content">
        <Reveal direction="up">
          <h2>Pon tu negocio en digital.</h2>
        </Reveal>

        <motion.img
          className="final-cta__device-img"
          src="/assets/Zorro/zorro-notas.png"
          alt="Zorro con lentes, mascota de Zorro Tech"
          style={{ rotate }}
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          loading="lazy"
        />

        <Reveal direction="up" delay={0.2}>
          <a
            className="button final-cta__button"
            href="https://wa.me/526645495385?text=Hola%2C%20me%20interesa%20comenzar%20con%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero comenzar
          </a>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <p className="final-cta__terms">
            Empieza con lo que necesitas hoy.<br />Nosotros te ayudamos a crecer después.
          </p>
        </Reveal>
      </div>

      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <p>Sitios web · Invitaciones digitales · Mantenimiento de cómputo<br />Tijuana, Baja California</p>
        <a href="#top" className="footer__logo" aria-label="Zorro Tech, volver al inicio"><Brand /></a>
        <p>
          <a href="https://wa.me/526645495385" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          {' · '}
          <a href="https://www.instagram.com/somoszorrotech/" target="_blank" rel="noopener noreferrer">Instagram</a>
          {' · '}
          <a href="https://www.facebook.com/profile.php?id=61594649223468" target="_blank" rel="noopener noreferrer">Facebook</a>
        </p>
      </motion.footer>
    </section>
  );
}
