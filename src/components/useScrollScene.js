import { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

// One progress value drives every layer of a scene, in either scroll direction.
export default function useScrollScene(stops = [0]) {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(0);
  const { scrollYProgress: progress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: no-preference)');
    const update = () => setEnabled(motionQuery.matches);
    update();
    motionQuery.addEventListener('change', update);
    return () => motionQuery.removeEventListener('change', update);
  }, []);
  useMotionValueEvent(progress, 'change', (value) => {
    let index = 0;
    stops.forEach((stop, i) => { if (value >= stop) index = i; });
    setActive(index);
  });
  const jump = (fraction) => {
    const node = ref.current;
    if (!node) return;
    const top = node.getBoundingClientRect().top + window.scrollY;
    const target = top + fraction * Math.max(0, node.offsetHeight - window.innerHeight);
    if (window.__zorroScroll) window.__zorroScroll.scrollTo(target);
    else window.scrollTo({ top: target, behavior: enabled ? 'smooth' : 'instant' });
  };
  return { ref, progress, active, enabled, jump, className: enabled ? 'scroll-scene' : 'scroll-scene scene-static' };
}
