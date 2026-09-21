import Reveal from './Reveal';
import { site } from '../config/site';

export default function AboutSection({ text }) {
  return (
    <section className="about section" id="about">
      <Reveal className="about-heading">
        <p className="kicker">{text.label}</p>
        <h2>{text.title}</h2>

        <div className="about-copy">
          <p>{text.text1}</p>
          <p>{text.text2}</p>
        </div>
      </Reveal>

      <div className="about-gallery">
        <Reveal className="about-image about-image--large">
          <img
            src={site.images.aboutMain}
            alt="Container ship and port"
          />
        </Reveal>

        <Reveal className="about-image" delay={0.05}>
          <img
            src={site.images.aboutPort}
            alt="Container terminal"
          />
        </Reveal>

        <Reveal className="about-image" delay={0.1}>
          <img
            src={site.images.aboutWarehouse}
            alt="Logistics warehouse"
          />
        </Reveal>
      </div>
    </section>
  );
}
