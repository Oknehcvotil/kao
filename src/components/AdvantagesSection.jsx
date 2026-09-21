import {
  ArrowRight,
  FileText,
  Globe2,
  Route,
  ShieldCheck,
  Ship,
  Truck,
} from 'lucide-react';

import Reveal from './Reveal';

const icons = [
  ShieldCheck,
  Truck,
  Globe2,
  Route,
  FileText,
  Ship,
];

export default function AdvantagesSection({ text }) {
  return (
    <section className="advantages" id="advantages">
      <div className="advantages-photo" aria-hidden="true" />
      <div className="advantages-shade" aria-hidden="true" />

      <div className="section advantages-inner">
        <Reveal>
          <h2>{text.title}</h2>
        </Reveal>

        <div className="advantages-grid">
          {text.items.map(([title, description], index) => {
            const Icon = icons[index] || ArrowRight;

            return (
              <Reveal key={title} delay={index * 0.04}>
                <article className="advantage-card">
                  <div className="advantage-top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
