import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { site } from '../config/site';

export default function Logo({ footer = false, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <a
      className={footer ? 'brand brand--footer' : 'brand'}
      href="#top"
      onClick={onClick}
      aria-label="KAO Delivery"
    >
      {footer ? (
        <img src={site.logo} alt="KAO Delivery" />
      ) : (
        <motion.img
          src={site.logo}
          alt="KAO Delivery"
          onLoad={() => setLoaded(true)}
          initial={prefersReducedMotion ? false : {
            opacity: 0,
            y: 4,
            filter: 'blur(4px)',
            clipPath: 'inset(0 100% 0 0)',
          }}
          animate={loaded || prefersReducedMotion ? {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            clipPath: 'inset(0 0% 0 0)',
          } : undefined}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </a>
  );
}
