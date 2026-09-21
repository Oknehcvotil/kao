import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero({ text }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="hero-photo" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-content">
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {text.title}
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          {text.text}
        </motion.p>
      </div>

      <motion.div
        className="hero-bottom"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.22 }}
      >
        <p>{text.note}</p>

        <div className="hero-actions">
          <a className="pill pill--light" href="#services">
            {text.secondary}
            <ChevronRight size={17} />
          </a>
          <a className="pill" href="#quote">
            {text.primary}
            <ArrowRight size={17} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
