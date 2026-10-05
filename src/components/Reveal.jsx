import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reveal — fade + slide up on scroll into view.
 *
 * Props:
 *   delay    – extra delay in seconds (stagger child cards, etc.)
 *   direction – 'up' (default) | 'left' | 'right' | 'down' | 'scale'
 *   className – passed through to the wrapper div
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}) {
  const reduced = useReducedMotion();

  const offsets = {
    up:    { y: 32 },
    down:  { y: -32 },
    left:  { x: 40 },
    right: { x: -40 },
    scale: { scale: 0.92 },
  };

  const hidden = reduced
    ? { opacity: 0 }
    : { opacity: 0, ...offsets[direction] };

  const visible = { opacity: 1, y: 0, x: 0, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduced ? 0 : 0.65,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
