import { motion, useTransform } from 'framer-motion';
import useScrollScene from './useScrollScene';
import './FoodRecognition.css';

const ICON_CDN = 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/svgs/solid/';
const modes = [
  { title: 'Tú solo disfruta.', text: 'Nosotros nos encargamos de toda la parte tecnológica para que tú solo veas resultados, ventas o el regalo perfecto.', icon: `${ICON_CDN}wand-magic-sparkles.svg` },
  { title: 'Presencia', text: 'Página web profesional para recibir clientes.', icon: `${ICON_CDN}display.svg` },
  { title: 'Ventas', text: 'Herramientas para convertir visitas en oportunidades.', icon: `${ICON_CDN}chart-line.svg` },
  { title: 'Automatización', text: 'Menos tareas repetitivas, más tiempo para tu negocio.', icon: `${ICON_CDN}gears.svg` },
];
const levels = [
  [330,325,320,310,300,290,280,285,290,300,305,310,320,330],
  [340,330,300,296,280,250,205,200,265,300,280,255,300,340],
  [340,320,270,225,210,160,65,20,120,210,250,245,310,335],
  [335,330,290,210,190,130,50,0,110,185,190,182,292,335],
];
const times = [0, 0.28, 0.55, 0.82];
function valuesAt(progress) {
  const stage = Math.min(2, Math.max(0, times.findIndex((t, i) => i < 3 && progress < times[i + 1])));
  if (progress >= 0.82) return levels[3];
  const t = Math.min(1, Math.max(0, (progress - times[stage]) / (times[stage + 1] - times[stage])));
  return levels[stage].map((v, i) => v + (levels[stage + 1][i] - v) * t);
}
function curve(values) {
  const points = values.map((y, i) => [i * 100, y]);
  let d = `M${points[0].join(',')}`;
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[Math.max(0, i - 1)], b = points[i], c = points[i + 1], e = points[Math.min(points.length - 1, i + 2)];
    d += ` C${b[0] + (c[0] - a[0]) / 6},${b[1] + (c[1] - a[1]) / 6} ${c[0] - (e[0] - b[0]) / 6},${c[1] - (e[1] - b[1]) / 6} ${c.join(',')}`;
  }
  return d;
}
function GraphDot({ index, progress }) {
  const cy = useTransform(progress, p => valuesAt(p)[index]);
  const end = useTransform(cy, y => y + 65);
  return <g><motion.line x1={index * 100} x2={index * 100} y1={cy} y2={end} stroke="#dde0e7" /><motion.circle cx={index * 100} cy={cy} r="10" fill="#111" fillOpacity="0.13" /><motion.circle cx={index * 100} cy={cy} r="5" fill="#111" /></g>;
}
export default function FoodRecognition() {
  const scene = useScrollScene([0, 0.2, 0.47, 0.74]);
  const x = useTransform(scene.progress, [0, 0.1, 0.28, 0.38, 0.55, 0.65, 0.82, 1], ['0vw', '0vw', '-100vw', '-100vw', '-200vw', '-200vw', '-300vw', '-300vw']);
  const timelineX = useTransform(scene.progress, [0, 1], ['0vw', '-300vw']);
  const d = useTransform(scene.progress, p => curve(valuesAt(p)));
  const fill = useTransform(d, path => `${path} L1300,420 L0,420 Z`);
  return <section id="smart-system" ref={scene.ref} className={`food-recognition ${scene.className}`} data-active={scene.active}>
    <div className="scene-pin metrics-stage">
      <div className="metrics-pointer" aria-hidden="true">▼</div>
      <motion.div className="metrics-timeline" style={scene.enabled ? { x: timelineX } : {}} aria-hidden="true">
        {Array.from({ length: 17 }, (_, i) => <div className="metrics-hour" key={i}><span>{3 + Math.floor(i / 2)}:{i % 2 ? '30' : '00'}</span><span>{i % 2 ? '' : ['☾', '◷', '☀', '⚖', '✧', '☷', '☀', '♜', '▱'][i / 2]}</span></div>)}
      </motion.div>
      <div className="metrics-symbol" aria-hidden="true"><img src={modes[scene.active].icon} alt="" /></div>
      <svg className="metrics-graph" viewBox="0 0 1300 420" preserveAspectRatio="none" role="img" aria-label="Crece a tu ritmo">
        <defs><linearGradient id="metrics-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#111" stopOpacity=".18" /><stop offset="1" stopColor="#111" stopOpacity="0" /></linearGradient></defs>
        <motion.path d={fill} fill="url(#metrics-fill)" />
        <motion.path d={d} fill="none" stroke="#dcdfe5" strokeWidth="1.5" />
        {levels[0].map((_, index) => <GraphDot key={index} {...{ index }} progress={scene.progress} />)}
      </svg>
      <motion.div className="metrics-titles" style={scene.enabled ? { x } : {}}>
        {modes.map((mode, i) => <article key={mode.title} className={`metrics-mode metrics-mode--${i}`} aria-hidden={scene.enabled ? scene.active !== i : undefined}>
          {i === 0 ? <h2>{mode.title}</h2> : <h3>{mode.title}</h3>}
          <p>{mode.text}</p>
        </article>)}
      </motion.div>
      <nav className="metrics-controls" aria-label="Niveles">{modes.slice(1).map((mode, i) => <button key={mode.title} aria-current={scene.active === i + 1 ? 'step' : undefined} onClick={() => scene.jump([0.32, 0.59, 0.95][i])}>{mode.title}</button>)}</nav>
    </div>
  </section>;
}
