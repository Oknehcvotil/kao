import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  FileCheck2,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Route,
  Send,
  Ship,
  ShieldCheck,
  Truck,
  X,
} from 'lucide-react';

const copy = {
  uk: {
    nav: { about: 'Про компанію', services: 'Наші послуги', contacts: 'Контакти' },
    contact: 'Звʼязатися',
    hero: {
      title: 'Міжнародні морські контейнерні перевезення',
      text: 'КАО Делівері надає повний логістичний комплекс послуг: від завантаження на заводі до доставки вантажу в країну призначення.',
      note: 'Мінімізуємо ризики — оптимізуємо маршрути.',
      cta: 'Отримати ставку',
    },
    about: {
      title: 'Про компанію',
      text1: 'КАО Делівері створена командою фахівців із багаторічним досвідом у сфері міжнародної логістики.',
      text2: 'Маємо власний автопарк та прямі робочі відносини з перевізниками. Це дозволяє формувати конкурентні ставки та забезпечувати повний контроль перевезення.',
      cta: 'Обговорити перевезення',
    },
    services: {
      title: 'Наші послуги',
      items: [
        { title: 'Експедирування', text: 'Організація та координація контейнерних перевезень, робота з портами, лініями, терміналами та агентами.' },
        { title: 'Морські перевезення', text: 'Міжнародні FCL та LCL перевезення морем із підбором маршруту, лінії та транзитного часу.' },
        { title: 'Автомобільна доставка', text: 'Доставка контейнерів до/з порту власним автопарком із контролем подачі та статусу автомобіля.' },
        { title: 'Митно-брокерські послуги', text: 'Підготовка документів, митне оформлення та супровід контролю на всіх етапах.' },
      ],
    },
    advantages: {
      title: 'Чому нас обирають',
      items: [
        ['Мінімізація ризиків', 'Обираємо безпечні порти, перевірені маршрути та надійних партнерів.'],
        ['Власний автопарк', 'Гнучкість, швидка подача контейнеровоза та контроль наземної частини перевезення.'],
        ['Конкурентні ставки', 'Пряма співпраця з перевізниками та власний транспорт без зайвих посередників.'],
        ['Оперативний розрахунок', 'Швидко орієнтуємось у ринку та пропонуємо практичні варіанти під ваш запит.'],
        ['Регулярна звітність', 'Інформуємо про статус вантажу з узгодженою періодичністю.'],
        ['Значний досвід роботи', 'Розуміємо специфіку українського ринку, портів та документальних процедур.'],
      ],
    },
    quote: {
      title: 'Отримати ставку',
      intro: 'Залиште основні дані про маршрут та вантаж — ми повернемось із варіантом перевезення.',
      name: 'Імʼя',
      phone: 'Телефон',
      email: 'Email',
      details: 'Деталі (маршрут, вантаж, вага тощо)',
      reply: 'Як бажаєте отримати відповідь?',
      phoneReply: 'Телефон',
      emailReply: 'Email',
      messenger: 'Месенджер',
      submit: 'Відправити запит',
      sending: 'Відправляємо…',
      success: 'Дякуємо! Запит відправлено.',
      error: 'Не вдалося відправити запит. Напишіть на office@kao.delivery.',
      fleet: 'Власний автопарк',
      fleetText: 'Контейнеровози для доставки до та з порту.',
    },
    contacts: {
      title: 'Контакти',
      company: 'ТОВ «КАО ДЕЛІВЕРІ»',
      address: 'Україна, 65012, м. Одеса, вул. Вʼячеслава Чорновола, 4, офіс 33',
      route: 'Побудувати маршрут',
    },
  },
  en: {
    nav: { about: 'About', services: 'Our services', contacts: 'Contacts' },
    contact: 'Contact us',
    hero: {
      title: 'International ocean container shipping',
      text: 'KAO Delivery provides end-to-end logistics support: from factory loading to final cargo delivery in the destination country.',
      note: 'We minimize risk — and optimize routes.',
      cta: 'Get a quote',
    },
    about: {
      title: 'About us',
      text1: 'KAO Delivery was created by a team with years of practical experience in international logistics.',
      text2: 'We operate our own truck fleet and work directly with carriers. This helps us build competitive rates and maintain control throughout the shipment.',
      cta: 'Discuss your shipment',
    },
    services: {
      title: 'Our services',
      items: [
        { title: 'Freight forwarding', text: 'Coordination of container shipments with ports, shipping lines, terminals and agents.' },
        { title: 'Ocean freight', text: 'International FCL and LCL sea freight with route, carrier and transit-time selection.' },
        { title: 'Road container delivery', text: 'Port pickup and inland container delivery using our own truck fleet.' },
        { title: 'Customs brokerage', text: 'Document preparation, customs clearance and support during customs procedures.' },
      ],
    },
    advantages: {
      title: 'Why choose us',
      items: [
        ['Risk reduction', 'Proven ports, routes and reliable partners.'],
        ['Own truck fleet', 'Flexible dispatch, fast container truck availability and inland control.'],
        ['Competitive rates', 'Direct carrier relationships and our own transport reduce unnecessary intermediaries.'],
        ['Fast quotations', 'Practical route and price options without long delays.'],
        ['Regular reporting', 'Shipment status updates at an agreed frequency.'],
        ['Hands-on experience', 'A strong understanding of Ukrainian ports, market specifics and documentation.'],
      ],
    },
    quote: {
      title: 'Get a quote',
      intro: 'Share the basic route and cargo details and we will come back with a transportation option.',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      details: 'Details (route, cargo, weight, etc.)',
      reply: 'Preferred response channel',
      phoneReply: 'Phone',
      emailReply: 'Email',
      messenger: 'Messenger',
      submit: 'Send request',
      sending: 'Sending…',
      success: 'Thank you! Your request has been sent.',
      error: 'Could not send the request. Email office@kao.delivery.',
      fleet: 'Own truck fleet',
      fleetText: 'Container trucks for port pickup and delivery.',
    },
    contacts: {
      title: 'Contacts',
      company: 'KAO DELIVERY LLC',
      address: '4 Viacheslava Chornovola St, office 33, Odesa, 65012, Ukraine',
      route: 'Get directions',
    },
  },
};

const serviceIcons = [Route, Ship, Truck, FileCheck2];
const advantageIcons = [ShieldCheck, Truck, Globe2, Route, FileCheck2, Ship];

function Reveal({ children, className = '', delay = 0 }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: .62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('kao-language') || 'uk');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState('idle');
  const reduced = useReducedMotion();
  const t = useMemo(() => copy[language] || copy.uk, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('kao-language', language);
  }, [language]);

  const closeMenu = () => setMenuOpen(false);

  const submitQuote = async (event) => {
    event.preventDefault();
    setFormState('sending');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const apiBase = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, language }),
      });

      if (!response.ok) throw new Error('Request failed');
      form.reset();
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="KAO Delivery">
          <img src="/logo-kao.webp" alt="KAO Delivery" />
        </a>

        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
          <a href="#contacts" onClick={closeMenu}>{t.nav.contacts}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language">
            <button className={language === 'uk' ? 'is-active' : ''} onClick={() => setLanguage('uk')}>UA</button>
            <span>/</span>
            <button className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
          <a className="header-contact" href="#contacts">{t.contact}</a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-wash" aria-hidden="true" />

          <motion.div
            className="hero-title"
            initial={reduced ? false : { opacity: 0, x: -18 }}
            animate={reduced ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: .72, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>{t.hero.title}</h1>
          </motion.div>

          <motion.p
            className="hero-copy"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={reduced ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .12 }}
          >
            {t.hero.text}
          </motion.p>

          <motion.div
            className="hero-footer"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: .6, delay: .22 }}
          >
            <p>{t.hero.note}</p>
            <a className="dark-button" href="#quote">{t.hero.cta}<ArrowRight size={19} /></a>
          </motion.div>
        </section>

        <section className="about section" id="about">
          <Reveal className="about-copy">
            <span className="section-label">KAO DELIVERY</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <a className="outline-button" href="#quote">{t.about.cta}<ArrowRight size={18} /></a>
          </Reveal>

          <Reveal className="about-photo" delay={.06}>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=86"
              alt="Container terminal"
            />
          </Reveal>
        </section>

        <section className="services" id="services">
          <div className="section services-inner">
            <Reveal><h2>{t.services.title}</h2></Reveal>

            <div className="service-grid">
              {t.services.items.map((item, index) => {
                const Icon = serviceIcons[index];
                return (
                  <Reveal key={item.title} className="service-item" delay={index * .05}>
                    <div className="service-icon"><Icon size={48} strokeWidth={1.35} /></div>
                    <article className="service-card">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="advantages" id="advantages">
          <div className="advantages-sky" aria-hidden="true" />
          <div className="section advantages-inner">
            <Reveal><h2>{t.advantages.title}</h2></Reveal>

            <Reveal className="advantages-panel" delay={.08}>
              {t.advantages.items.map(([title, text], index) => {
                const Icon = advantageIcons[index];
                return (
                  <div className="advantage-line" key={title}>
                    <Icon size={20} strokeWidth={1.6} />
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </section>

        <section className="quote-section" id="quote">
          <div className="quote-network" aria-hidden="true" />
          <div className="section quote-inner">
            <Reveal className="quote-form-wrap">
              <h2>{t.quote.title}</h2>
              <p className="quote-intro">{t.quote.intro}</p>

              <form className="quote-form" onSubmit={submitQuote}>
                <input className="honeypot" type="text" name="website" tabIndex="-1" autoComplete="off" />
                <label><span>{t.quote.name}</span><input name="name" required autoComplete="name" /></label>
                <label><span>{t.quote.phone}</span><input name="phone" type="tel" required autoComplete="tel" /></label>
                <label><span>{t.quote.email}</span><input name="email" type="email" required autoComplete="email" /></label>
                <label><span>{t.quote.details}</span><textarea name="details" rows="4" required /></label>

                <fieldset>
                  <legend>{t.quote.reply}</legend>
                  <label><input type="radio" name="replyVia" value="phone" defaultChecked />{t.quote.phoneReply}</label>
                  <label><input type="radio" name="replyVia" value="email" />{t.quote.emailReply}</label>
                  <label><input type="radio" name="replyVia" value="messenger" />{t.quote.messenger}</label>
                </fieldset>

                <button className="submit-button" type="submit" disabled={formState === 'sending'}>
                  {formState === 'sending' ? t.quote.sending : t.quote.submit}<Send size={17} />
                </button>

                {formState === 'success' && <p className="form-status success">{t.quote.success}</p>}
                {formState === 'error' && <p className="form-status error">{t.quote.error}</p>}
              </form>
            </Reveal>

            <Reveal className="fleet-visual" delay={.08}>
              <div className="fleet-photo" />
              <div className="fleet-card">
                <Truck size={32} strokeWidth={1.45} />
                <div>
                  <strong>{t.quote.fleet}</strong>
                  <span>{t.quote.fleetText}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="section contacts-grid">
            <Reveal className="contact-info">
              <h2>{t.contacts.title}</h2>
              <div className="contact-list">
                <div><MapPin size={20} /><p><strong>{t.contacts.company}</strong><span>{t.contacts.address}</span></p></div>
                <div><Phone size={20} /><a href="tel:+380966938465">+380 96 693 84 65</a></div>
                <div><Mail size={20} /><a href="mailto:office@kao.delivery">office@kao.delivery</a></div>
              </div>
              <a
                className="outline-button"
                href="https://www.google.com/maps/search/?api=1&query=4+Viacheslava+Chornovola+St+Odesa+Ukraine"
                target="_blank"
                rel="noreferrer"
              >
                {t.contacts.route}<ArrowRight size={18} />
              </a>
            </Reveal>

            <Reveal className="map-wrap" delay={.06}>
              <iframe
                title="KAO Delivery office"
                src="https://www.google.com/maps?q=4+Viacheslava+Chornovola+St,+Odesa,+Ukraine&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/logo-kao.webp" alt="KAO Delivery" />
        <p>{t.contacts.company}<br />{t.contacts.address}</p>
        <p><a href="tel:+380966938465">+380 96 693 84 65</a><br /><a href="mailto:office@kao.delivery">office@kao.delivery</a></p>
      </footer>
    </div>
  );
}
