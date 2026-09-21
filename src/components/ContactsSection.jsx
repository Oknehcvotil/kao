import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

import Reveal from './Reveal';
import { site } from '../config/site';

export default function ContactsSection({ text }) {
  return (
    <section className="contacts" id="contacts">
      <div className="contact-photo">
        <a
          className="contact-photo-credit"
          href="https://commons.wikimedia.org/wiki/File:Containers_in_the_port_of_Odessa.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Photo: Shamil Khakirov / CC BY-SA 2.0
        </a>
      </div>

      <div className="contact-panel">
        <Reveal>
          <p className="kicker kicker--light">KAO DELIVERY / ODESA</p>
          <h2>{text.title}</h2>

          <div className="contact-list">
            <div>
              <MapPin />
              <p>
                <strong>{text.company}</strong>
                <span>{text.address}</span>
              </p>
            </div>

            <div>
              <Phone />
              <a href={site.phoneHref}>{site.phone}</a>
            </div>

            <div>
              <Mail />
              <a href={site.emailHref}>{site.email}</a>
            </div>
          </div>

          <a
            className="pill pill--light"
            href={site.directionsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {text.route}
            <ArrowRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
