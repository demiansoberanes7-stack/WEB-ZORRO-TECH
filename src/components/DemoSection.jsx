import { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import './DarkSection.css';
import './DemoSection.css';

const whatsappUrl = 'https://wa.me/526645495385?text=Hola%2C%20me%20gustar%C3%ADa%20conocer%20los%20servicios%20de%20Zorro%20Tech.';

const BLOG_SLIDES = [
  { src: '/assets/blogs/blog-1791528386972.png', alt: 'Psicología del consumidor – Blog Zorro Tech' },
  { src: '/assets/blogs/blog-1791524877333.png', alt: 'FOMO – Blog Zorro Tech' },
  { src: '/assets/blogs/blog-1791525771684.png', alt: 'Marketing digital – Blog Zorro Tech' },
];

const AUTO_PLAY_DELAY = 4667; // 50% más rápido que 7s

export default function DemoSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTime = useRef(Date.now());
  const navigate = useNavigate();

  const goTo = useCallback((index) => {
    setCurrent(index);
    setProgress(0);
    startTime.current = Date.now();
  }, []);

  const goNext = useCallback(() => {
    setCurrent(prev => (prev + 1) % BLOG_SLIDES.length);
    setProgress(0);
    startTime.current = Date.now();
  }, []);

  // Auto-play timer + progress bar
  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startTime.current;
      const pct = Math.min((elapsed / AUTO_PLAY_DELAY) * 100, 100);
      setProgress(pct);
      if (elapsed >= AUTO_PLAY_DELAY) {
        goNext();
      }
    };
    progressRef.current = setInterval(tick, 50);
    return () => clearInterval(progressRef.current);
  }, [current, goNext]);

  const supportLabel = <><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.45 0 .08 5.37.08 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.97 11.97 0 0 0 5.84 1.49h.01C18.65 23.86 24 18.49 24 11.89c0-3.19-1.24-6.19-3.48-8.41ZM12.05 21.84a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.24-.37a9.88 9.88 0 0 1-1.52-5.29c0-5.48 4.46-9.94 9.95-9.94a9.87 9.87 0 0 1 7.02 2.91 9.87 9.87 0 0 1 2.91 7.03c0 5.48-4.47 9.87-10.01 9.87Zm5.46-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.19-.57-.34Z" /></svg><span>Hablar por WhatsApp</span></>;

  return (
    <section className="zt-dark zt-demo" id="demo" aria-labelledby="demo-heading">
      <div className="zt-container">
        <Reveal direction="up">
          <h2 className="zt-heading" id="demo-heading">Revisa nuestro blog</h2>
        </Reveal>
        <Reveal direction="up" delay={0.12}>
          <p className="zt-demo__lead">Descubre artículos sobre tecnología, marketing y psicología del consumidor en nuestro blog.</p>
        </Reveal>

        <Reveal className="zt-demo__shell" direction="scale" delay={0.2}>
          <div className="zt-demo__glow" aria-hidden="true" />
          {/* Carousel */}
          <div className="zt-carousel" role="region" aria-label="Portadas del blog">
            <div className="zt-carousel__track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {BLOG_SLIDES.map((slide, i) => (
                <Link
                  key={slide.src}
                  to="/blog"
                  className="zt-carousel__slide zt-demo__box"
                  tabIndex={i === current ? 0 : -1}
                  aria-hidden={i !== current}
                >
                  <img
                    className="zt-demo__poster"
                    src={slide.src}
                    alt={slide.alt}
                    width="2000"
                    height="1125"
                    loading={i === 0 ? 'eager' : 'lazy'}
                  />
                </Link>
              ))}
            </div>

            {/* Progress bar */}
            <div className="zt-carousel__progress" aria-hidden="true">
              <div className="zt-carousel__progress-bar" style={{ width: `${progress}%` }} />
            </div>

            {/* Dot navigation */}
            <nav className="zt-carousel__dots" aria-label="Seleccionar artículo">
              {BLOG_SLIDES.map((_, i) => (
                <button
                  key={i}
                  className={`zt-carousel__dot${i === current ? ' zt-carousel__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Artículo ${i + 1}`}
                  aria-current={i === current ? 'true' : undefined}
                />
              ))}
            </nav>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.1}>
          <p
            className="zt-demo__notice zt-demo__notice--bold"
            onClick={() => navigate('/blog')}
          >
            Haz clic en la imagen para leer el artículo completo
          </p>
        </Reveal>
      </div>

      <a
        className="zt-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hablar por WhatsApp"
      >
        {supportLabel}
      </a>
    </section>
  );
}
