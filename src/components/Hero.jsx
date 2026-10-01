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
          <h1>Facilitamos tus procesos tecnológicos</h1>
          <p>Sitios web, invitaciones digitales y mantenimiento de equipo de cómputo<br /> para pequeños negocios.</p>
          <a className="button" href="https://wa.me/526645495385?text=Hola%2C%20me%20interesa%20comenzar%20con%20sus%20servicios." target="_blank" rel="noreferrer">Quiero empezar</a>
          <p className="hero__subtitle">Tijuana · Soluciones accesibles · Sin complicaciones</p>
        </motion.div>
      </motion.div>
    </div>
  </section>;
}
