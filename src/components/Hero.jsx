import { motion, useTransform } from 'framer-motion';
import useScrollScene from './useScrollScene';
import './Hero.css';

const HERO_VIDEO = '/assets/fox-typing-and-waving.mp4';

export default function Hero() {
  const scene = useScrollScene();
  const width = useTransform(scene.progress, [0, .2, 1], ['100%', '100%', '24vw']);
  const height = useTransform(scene.progress, [0, .2, 1], ['100%', '100%', '28svh']);
  const borderRadius = useTransform(scene.progress, [0, 1], ['3vw', '15vw']);
  const opacity = useTransform(scene.progress, [0, .35], [1, 0]);
  return <section ref={scene.ref} className={`hero ${scene.className}`}>
    <div className="scene-pin hero__camera">
      <motion.div className="hero__mask" style={scene.enabled ? { width, height, borderRadius } : {}}>
        <video className="hero__video" src={HERO_VIDEO} autoPlay muted playsInline loop preload="metadata" aria-hidden="true" />
        <motion.div className="hero__content" style={scene.enabled ? { opacity } : {}}>
          <h1>Hacemos que lo digital trabaje para ti</h1>
          <p>No vendemos solo mantenimiento de cómputo, sitios web o marketing. Creamos soluciones para que trabajes sin interrupciones, atraigas más clientes y crezcas sin estrés.</p>
          <a className="button" href="https://wa.me/526645495385?text=Hola%2C%20estoy%20visitando%20la%20p%C3%A1gina.%20Me%20gustar%C3%ADa%20platicar%20sobre%20mi%20negocio." target="_blank" rel="noopener noreferrer">¿En qué etapa está tu negocio hoy?</a>
          <p className="hero__subtitle">Tijuana · Estrategias reales · Atención 100% personalizada</p>
        </motion.div>
      </motion.div>
    </div>
  </section>;
}
