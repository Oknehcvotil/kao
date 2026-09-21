import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Container,
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
  Zap,
} from 'lucide-react';

const copy = {
  uk: {
    nav: { about: 'Про компанію', services: 'Послуги', advantages: 'Переваги', contacts: 'Контакти' },
    cta: 'Отримати ставку',
    hero: {
      eyebrow: 'Міжнародна логістика без зайвих ланок',
      title: 'Морські контейнерні перевезення',
      accent: 'під повним контролем.',
      text: 'Мінімізуємо ризики та оптимізуємо маршрути. KAO Delivery супроводжує вантаж від завантаження на заводі до доставки в країну призначення.',
      primary: 'Розрахувати перевезення',
      secondary: 'Наші послуги',
      stat1: 'FCL / LCL',
      stat1Text: 'морські перевезення',
      stat2: '24/7',
      stat2Text: 'контроль статусу',
      stat3: 'Власний',
      stat3Text: 'автопарк',
    },
    about: {
      eyebrow: 'Про компанію',
      title: 'Одна команда для всього маршруту вантажу.',
      text1: 'KAO Delivery створена командою фахівців із багаторічним досвідом у міжнародній логістиці, експедируванні та митному оформленні.',
      text2: 'Власний автопарк і прямі робочі відносини з перевізниками дозволяють швидше реагувати на зміни, тримати наземну частину під контролем і формувати конкурентні ставки.',
      badge: 'Від порту до дверей',
    },
    services: {
      eyebrow: 'Наші послуги',
      title: 'Контейнерна логістика без розривів між етапами.',
      text: 'Беремо на себе ключові ланки перевезення — від координації лінії та порту до митниці й фінальної автомобільної доставки.',
      items: [
        { title: 'Експедирування', text: 'Організація та координація контейнерних перевезень, робота з портами, лініями, терміналами та агентами.' },
        { title: 'Митно-брокерські послуги', text: 'Підготовка документів, митне оформлення, супровід контролю та комунікація з усіма учасниками процесу.' },
        { title: 'Доставка морем', text: 'Міжнародні FCL та LCL перевезення з підбором маршруту, лінії та транзитного часу під задачу клієнта.' },
        { title: 'Доставка авто', text: 'Контейнерна та генеральна доставка до/з порту власним автопарком із контролем подачі та статусу машини.' },
      ],
      details: 'Детальніше',
    },
    advantages: {
      eyebrow: 'Чому KAO Delivery',
      title: 'Логістика, де зрозуміло хто відповідає за результат.',
      items: [
        ['Мінімізація ризиків', 'Перевірені маршрути, порти та партнери. Зміни опрацьовуємо до того, як вони стануть проблемою.'],
        ['Власний автопарк', 'Швидка подача авто, контроль наземної частини та менша залежність від сторонніх підрядників.'],
        ['Конкурентні ставки', 'Прямі робочі контакти та власний транспорт допомагають уникати зайвих посередницьких націнок.'],
        ['Оперативний розрахунок', 'Швидко орієнтуємось у ринку та повертаємось із практичними варіантами маршруту й вартості.'],
        ['Регулярна звітність', 'Погоджуємо формат і частоту апдейтів, щоб статус вантажу не доводилося запитувати вручну.'],
        ['Практичний досвід', 'Розуміємо український ринок, портові процеси та документальні нюанси складних міжнародних перевезень.'],
      ],
    },
    fleet: {
      eyebrow: 'Власний автопарк',
      title: 'Море закінчується в порту. Наша відповідальність — ні.',
      text: 'Плануємо подачу автомобіля під вивантаження контейнера, контролюємо наземний маршрут і тримаємо клієнта в курсі на кожному етапі.',
      button: 'Запросити ставку',
    },
    form: {
      eyebrow: 'Отримати ставку',
      title: 'Розкажіть, що потрібно перевезти.',
      text: 'Дайте базові дані по маршруту та вантажу — команда KAO Delivery зв’яжеться з вами щодо варіантів перевезення.',
      name: 'Ім’я',
      phone: 'Телефон',
      email: 'Email',
      details: 'Маршрут, вантаж, вага, контейнер та інші деталі',
      reply: 'Як бажаєте отримати відповідь?',
      phoneReply: 'Телефон',
      emailReply: 'Email',
      messenger: 'Месенджер',
      submit: 'Відправити запит',
      sending: 'Відправляємо…',
      success: 'Дякуємо! Запит відправлено. Ми зв’яжемося з вами найближчим часом.',
      error: 'Не вдалося відправити запит. Спробуйте ще раз або напишіть на office@kao.delivery.',
    },
    contacts: {
      eyebrow: 'Контакти',
      title: 'Ми в Одесі. Працюємо з маршрутами по всьому світу.',
      address: 'Україна, 65012, м. Одеса, вул. В’ячеслава Чорновола, 4, офіс 33',
      company: 'ТОВ «КАО ДЕЛІВЕРІ»',
      route: 'Побудувати маршрут',
    },
    footer: {
      line: 'Міжнародні контейнерні перевезення та комплексний логістичний супровід.',
      rights: 'Усі права захищені.',
    },
  },
  en: {
    nav: { about: 'About', services: 'Services', advantages: 'Why us', contacts: 'Contacts' },
    cta: 'Get a quote',
    hero: {
      eyebrow: 'International logistics without unnecessary links',
      title: 'Ocean container shipping',
      accent: 'under full control.',
      text: 'We reduce risk and optimize routes. KAO Delivery supports your cargo from factory loading to final delivery in the destination country.',
      primary: 'Calculate shipment',
      secondary: 'Our services',
      stat1: 'FCL / LCL',
      stat1Text: 'ocean freight',
      stat2: '24/7',
      stat2Text: 'shipment visibility',
      stat3: 'Own',
      stat3Text: 'truck fleet',
    },
    about: {
      eyebrow: 'About us',
      title: 'One team for the entire cargo route.',
      text1: 'KAO Delivery was built by specialists with years of practical experience in international logistics, freight forwarding and customs clearance.',
      text2: 'Our own truck fleet and direct working relationships with carriers help us react faster, control inland delivery and build competitive rates.',
      badge: 'Port to door',
    },
    services: {
      eyebrow: 'Our services',
      title: 'Container logistics without gaps between stages.',
      text: 'We manage the key stages of transportation — from carrier and terminal coordination to customs and final road delivery.',
      items: [
        { title: 'Freight forwarding', text: 'Container shipment coordination with shipping lines, ports, terminals and agents from booking to release.' },
        { title: 'Customs brokerage', text: 'Document preparation, customs clearance, control support and communication with all parties involved.' },
        { title: 'Ocean freight', text: 'International FCL and LCL transportation with route, carrier and transit-time options matched to your cargo.' },
        { title: 'Road delivery', text: 'Port pickup and inland delivery using our own truck fleet, with vehicle dispatch and shipment status control.' },
      ],
      details: 'Learn more',
    },
    advantages: {
      eyebrow: 'Why KAO Delivery',
      title: 'Logistics with clear ownership of the result.',
      items: [
        ['Risk reduction', 'Proven routes, ports and partners. We work through changes before they turn into disruptions.'],
        ['Own truck fleet', 'Faster dispatch, better inland control and less dependence on third-party subcontractors.'],
        ['Competitive rates', 'Direct relationships and our own transport help reduce unnecessary intermediary costs.'],
        ['Fast quotations', 'We understand the market and respond quickly with practical route and price options.'],
        ['Regular reporting', 'We agree the update format and frequency so you do not have to chase shipment status.'],
        ['Hands-on experience', 'Deep understanding of the Ukrainian market, ports and documentation in complex logistics conditions.'],
      ],
    },
    fleet: {
      eyebrow: 'Own truck fleet',
      title: 'The sea ends at the port. Our responsibility does not.',
      text: 'We schedule truck arrival around container release, control the inland leg and keep the client informed throughout the journey.',
      button: 'Request a quote',
    },
    form: {
      eyebrow: 'Get a quote',
      title: 'Tell us what you need to move.',
      text: 'Share the basic route and cargo details — the KAO Delivery team will contact you with transportation options.',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      details: 'Route, cargo, weight, container and other details',
      reply: 'Preferred response channel',
      phoneReply: 'Phone',
      emailReply: 'Email',
      messenger: 'Messenger',
      submit: 'Send request',
      sending: 'Sending…',
      success: 'Thank you! Your request has been sent. We will contact you shortly.',
      error: 'Could not send the request. Please try again or email office@kao.delivery.',
    },
    contacts: {
      eyebrow: 'Contacts',
      title: 'Based in Odesa. Working with routes worldwide.',
      address: '4 Viacheslava Chornovola St, office 33, Odesa, 65012, Ukraine',
      company: 'KAO DELIVERY LLC',
      route: 'Get directions',
    },
    footer: {
      line: 'International container shipping and end-to-end logistics support.',
      rights: 'All rights reserved.',
    },
  },
};

const serviceIcons = [Route, FileCheck2, Ship, Truck];
const advantageIcons = [ShieldCheck, Truck, Globe2, Zap, CheckCircle2, Container];

function Reveal({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
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
        <a className="brand" href="#top" aria-label="KAO Delivery home" onClick={closeMenu}>
          <span className="brand-mark">K</span>
          <span className="brand-type">
            <strong>KAO</strong>
            <small>DELIVERY</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}>
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#services" onClick={closeMenu}>{t.nav.services}</a>
          <a href="#advantages" onClick={closeMenu}>{t.nav.advantages}</a>
          <a href="#contacts" onClick={closeMenu}>{t.nav.contacts}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch" aria-label="Language switcher">
            <button className={language === 'uk' ? 'is-active' : ''} onClick={() => setLanguage('uk')}>UA</button>
            <span>/</span>
            <button className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
          <a className="button button--small" href="#quote">{t.cta}<ArrowDownRight size={17} /></a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <motion.p
              className="eyebrow eyebrow--light"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {t.hero.title}<br /><span>{t.hero.accent}</span>
            </motion.h1>
            <motion.p
              className="hero-copy"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
            >
              {t.hero.text}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduced ? false : { opacity: 0 }}
              animate={reduced ? undefined : { opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <a className="button" href="#quote">{t.hero.primary}<ArrowRight size={18} /></a>
              <a className="text-link text-link--light" href="#services">{t.hero.secondary}<ChevronRight size={17} /></a>
            </motion.div>
          </div>

          <div className="hero-stats">
            <div><strong>{t.hero.stat1}</strong><span>{t.hero.stat1Text}</span></div>
            <div><strong>{t.hero.stat2}</strong><span>{t.hero.stat2Text}</span></div>
            <div><strong>{t.hero.stat3}</strong><span>{t.hero.stat3Text}</span></div>
          </div>

          <div className="hero-rail" aria-hidden="true">
            <span>KAO</span><span>DELIVERY</span><span>ODESSA</span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-visual">
            <Reveal>
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=84"
                  alt="Container logistics at port"
                />
                <div className="image-tag"><Ship size={18} />{t.about.badge}</div>
              </div>
            </Reveal>
          </div>
          <Reveal className="about-copy">
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <a className="text-link" href="#contacts">{t.nav.contacts}<ArrowRight size={17} /></a>
          </Reveal>
        </section>

        <section className="section services" id="services">
          <Reveal>
            <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} text={t.services.text} />
          </Reveal>
          <div className="service-grid">
            {t.services.items.map((item, index) => {
              const Icon = serviceIcons[index];
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="service-card">
                    <div className="service-index">0{index + 1}</div>
                    <Icon className="service-icon" size={30} strokeWidth={1.7} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a href="#quote">{t.services.details}<ArrowRight size={16} /></a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="advantages" id="advantages">
          <div className="section advantages-inner">
            <Reveal>
              <SectionHeading eyebrow={t.advantages.eyebrow} title={t.advantages.title} light />
            </Reveal>
            <div className="advantage-grid">
              {t.advantages.items.map(([title, text], index) => {
                const Icon = advantageIcons[index];
                return (
                  <Reveal key={title} delay={index * 0.04}>
                    <article className="advantage-item">
                      <Icon size={24} strokeWidth={1.7} />
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="fleet-band">
          <div className="fleet-image" aria-hidden="true" />
          <div className="fleet-shade" aria-hidden="true" />
          <Reveal className="fleet-copy">
            <p className="eyebrow eyebrow--light">{t.fleet.eyebrow}</p>
            <h2>{t.fleet.title}</h2>
            <p>{t.fleet.text}</p>
            <a className="button button--light" href="#quote">{t.fleet.button}<ArrowRight size={18} /></a>
          </Reveal>
        </section>

        <section className="quote-section" id="quote">
          <div className="section quote-inner">
            <Reveal>
              <SectionHeading eyebrow={t.form.eyebrow} title={t.form.title} text={t.form.text} />
              <div className="quote-direct">
                <a href="tel:+380966938465"><Phone size={18} />+380 96 693 84 65</a>
                <a href="mailto:office@kao.delivery"><Mail size={18} />office@kao.delivery</a>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form className="quote-form" onSubmit={submitQuote}>
                <input className="honeypot" type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" />
                <div className="form-row">
                  <label><span>{t.form.name}</span><input name="name" required autoComplete="name" /></label>
                  <label><span>{t.form.phone}</span><input name="phone" type="tel" required autoComplete="tel" /></label>
                </div>
                <label><span>{t.form.email}</span><input name="email" type="email" required autoComplete="email" /></label>
                <label><span>{t.form.details}</span><textarea name="details" rows="5" required /></label>
                <fieldset>
                  <legend>{t.form.reply}</legend>
                  <label className="radio"><input type="radio" name="replyVia" value="phone" defaultChecked /><span>{t.form.phoneReply}</span></label>
                  <label className="radio"><input type="radio" name="replyVia" value="email" /><span>{t.form.emailReply}</span></label>
                  <label className="radio"><input type="radio" name="replyVia" value="messenger" /><span>{t.form.messenger}</span></label>
                </fieldset>
                <button className="button form-submit" type="submit" disabled={formState === 'sending'}>
                  {formState === 'sending' ? t.form.sending : t.form.submit}<Send size={17} />
                </button>
                {formState === 'success' && <p className="form-status form-status--success">{t.form.success}</p>}
                {formState === 'error' && <p className="form-status form-status--error">{t.form.error}</p>}
              </form>
            </Reveal>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="section contacts-inner">
            <Reveal className="contact-copy">
              <SectionHeading eyebrow={t.contacts.eyebrow} title={t.contacts.title} light />
              <div className="contact-list">
                <div><MapPin /><p><strong>{t.contacts.company}</strong><span>{t.contacts.address}</span></p></div>
                <div><Phone /><p><a href="tel:+380966938465">+380 96 693 84 65</a></p></div>
                <div><Mail /><p><a href="mailto:office@kao.delivery">office@kao.delivery</a></p></div>
              </div>
              <a
                className="button button--light"
                href="https://www.google.com/maps/search/?api=1&query=4+Viacheslava+Chornovola+St+Odesa+Ukraine"
                target="_blank"
                rel="noreferrer"
              >
                {t.contacts.route}<ArrowRight size={18} />
              </a>
            </Reveal>
            <Reveal delay={0.08} className="map-wrap">
              <iframe
                title="KAO Delivery office map"
                src="https://www.google.com/maps?q=4+Viacheslava+Chornovola+St,+Odesa,+Ukraine&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand--footer" href="#top" aria-label="KAO Delivery home">
          <span className="brand-mark">K</span>
          <span className="brand-type"><strong>KAO</strong><small>DELIVERY</small></span>
        </a>
        <p>{t.footer.line}</p>
        <p>© {new Date().getFullYear()} KAO Delivery. {t.footer.rights}</p>
      </footer>
    </div>
  );
}
