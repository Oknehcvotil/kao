import {
  ArrowRight,
  FileText,
  Route,
  Ship,
  Truck,
} from 'lucide-react';

import Reveal from './Reveal';

const icons = [Route, FileText, Ship, Truck];

export default function ServicesSection({ text }) {
  return (
    <section className="services section" id="services">
      <Reveal className="section-title-row">
        <h2>{text.title}</h2>
        <p>{text.intro}</p>
      </Reveal>

      <div className="service-list">
        {text.items.map((item, index) => {
          const Icon = icons[index];

          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="service-row">
                <span className="service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="service-icon">
                  <Icon size={25} strokeWidth={1.5} />
                </span>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <a href="#quote" aria-label={item.title}>
                  <ArrowRight size={20} />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
