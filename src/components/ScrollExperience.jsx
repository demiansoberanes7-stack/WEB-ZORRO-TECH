import { useEffect } from 'react';
import Lenis from 'lenis';

export default function ScrollExperience() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: no-preference)');
    let instance;
    const configure = () => {
      instance?.destroy();
      if (query.matches) {
        const isMobile = window.innerWidth < 768;
        instance = new Lenis({
          autoRaf: true,
          lerp: isMobile ? 0.1 : 0.05,
          anchors: true,
          touchMultiplier: isMobile ? 1.5 : 1,
        });
      }
      window.__zorroScroll = instance;
    };
    configure();
    query.addEventListener('change', configure);
    return () => { query.removeEventListener('change', configure); instance?.destroy(); delete window.__zorroScroll; };
  }, []);
  return null;
}
