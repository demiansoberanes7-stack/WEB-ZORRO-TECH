import { motion, useTransform } from 'framer-motion';
import useScrollScene from './useScrollScene';
import './Hero.css';

const HERO_VIDEO = '/assets/fox-typing-and-waving.mp4';

export default function Hero({ onPreorder }) {
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
          <h1>Facilitamos tus procesos tecnológicos</h1>
          <p>Sitios web, mantenimiento de cómputo y herramientas digitales<br /> para pequeños negocios.</p>
          <button className="button" onClick={onPreorder}>Quiero empezar</button>
          <p className="hero__subtitle">Tijuana · Soluciones accesibles · Sin complicaciones</p>
        </motion.div>
      </motion.div>
    </div>
  </section>;
}
