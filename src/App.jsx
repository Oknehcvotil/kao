import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ChevronRight,
  FileText,
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
    nav: { about: 'Про компанію', services: 'Наші послуги', advantages: 'Чому ми', contacts: 'Контакти' },
    cta: 'Звʼязатися',
    hero: {
      title: 'Міжнародні морські контейнерні перевезення',
      text: 'КАО Делівері надає повний логістичний комплекс послуг: від завантаження на заводі до доставки вантажу в країну призначення.',
      note: 'Мінімізуємо ризики — оптимізуємо маршрути.',
      primary: 'Отримати ставку',
      secondary: 'Наші послуги',
    },
    about: {
      title: 'Про компанію',
      text1: 'КАО Делівері створена командою фахівців із багаторічним досвідом у сфері міжнародної логістики.',
      text2: 'Маємо власний автопарк та прямі робочі відносини з перевізниками. Це дозволяє формувати конкурентні ставки та забезпечувати повний контроль перевезення.',
      label: 'KAO DELIVERY / ODESA',
    },
    services: {
      title: 'Наші послуги',
      intro: 'Комплексна контейнерна логістика — від координації перевезення до митного оформлення та доставки до дверей.',
      items: [
        { title: 'Експедирування', text: 'Організація та координація контейнерних перевезень, робота з портами, лініями, терміналами та агентами.' },
        { title: 'Митно-брокерські послуги', text: 'Підготовка документів, митне оформлення, супровід контролю та комунікація з усіма учасниками процесу.' },
        { title: 'Доставка морем', text: 'Міжнародні FCL та LCL перевезення з підбором маршруту, лінії та транзитного часу.' },
        { title: 'Доставка авто', text: 'Доставка до/з порту власним автопарком із контролем подачі, маршруту та статусу.' },
      ],
    },
    advantages: {
      title: 'Чому нас обирають',
      items: [
        ['Мінімізація ризиків', 'Обираємо перевірені маршрути, порти та партнерів.'],
        ['Власний автопарк', 'Гнучкість, швидка подача авто та контроль наземної частини.'],
        ['Конкурентні ставки', 'Прямі робочі контакти та власний транспорт без зайвих посередників.'],
        ['Оперативний розрахунок', 'Швидко орієнтуємось у ринку та повертаємось із практичними варіантами.'],
        ['Регулярна звітність', 'Інформуємо про статус вантажу з узгодженою періодичністю.'],
        ['Значний досвід', 'Розуміємо український ринок, порти та документальні процедури.'],
      ],
    },
    quote: {
      title: 'Отримати ставку',
      text: 'Залиште основні дані про вантаж і маршрут — ми звʼяжемося з вами та запропонуємо варіант перевезення.',
      name: 'Імʼя',
      phone: 'Телефон',
      email: 'Email',
      details: 'Деталі — маршрут, вантаж, вага тощо',
      reply: 'Як бажаєте отримати відповідь?',
      phoneReply: 'Телефон',
      emailReply: 'Email',
      messenger: 'Месенджер',
      submit: 'Відправити запит',
      sending: 'Відправляємо…',
      success: 'Дякуємо! Запит відправлено.',
      error: 'Не вдалося відправити запит. Напишіть на office@kao.delivery.',
    },
    contacts: {
      title: 'Контакти',
      company: 'ТОВ «КАО ДЕЛІВЕРІ»',
      address: 'Україна, 65012, м. Одеса, вул. Вʼячеслава Чорновола, 4, офіс 33',
      route: 'Побудувати маршрут',
    },
    footer: 'Міжнародні контейнерні перевезення та комплексний логістичний супровід.',
  },
  en: {
    nav: { about: 'About', services: 'Services', advantages: 'Why us', contacts: 'Contacts' },
    cta: 'Contact us',
    hero: {
      title: 'International ocean container shipping',
      text: 'KAO Delivery provides end-to-end logistics support — from factory loading to final cargo delivery in the destination country.',
      note: 'We minimize risk and optimize routes.',
      primary: 'Get a quote',
      secondary: 'Our services',
    },
    about: {
      title: 'About us',
      text1: 'KAO Delivery was created by a team with years of hands-on experience in international logistics.',
      text2: 'We operate our own truck fleet and work directly with carriers, helping us build competitive rates and keep every leg under control.',
      label: 'KAO DELIVERY / ODESA',
    },
    services: {
      title: 'Our services',
      intro: 'End-to-end container logistics — from shipment coordination to customs clearance and final delivery.',
      items: [
        { title: 'Freight forwarding', text: 'Container shipment coordination with ports, shipping lines, terminals and agents.' },
        { title: 'Customs brokerage', text: 'Document preparation, customs clearance and support throughout customs procedures.' },
        { title: 'Ocean freight', text: 'International FCL and LCL shipping with route, carrier and transit-time selection.' },
        { title: 'Road delivery', text: 'Port pickup and inland delivery with our own truck fleet and full status control.' },
      ],
    },
    advantages: {
      title: 'Why choose us',
      items: [
        ['Risk reduction', 'Proven routes, ports and partners.'],
        ['Own truck fleet', 'Flexible dispatch and better control of inland delivery.'],
        ['Competitive rates', 'Direct relationships and our own transport reduce unnecessary intermediaries.'],
        ['Fast quotations', 'Practical route and pricing options without long delays.'],
        ['Regular reporting', 'Shipment status updates at an agreed frequency.'],
        ['Hands-on experience', 'Deep understanding of the Ukrainian logistics market and port procedures.'],
      ],
    },
    quote: {
      title: 'Get a quote',
      text: 'Share your route and cargo details and we will contact you with a transportation option.',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      details: 'Details — route, cargo, weight, etc.',
      reply: 'Preferred response channel',
      phoneReply: 'Phone',
      emailReply: 'Email',
      messenger: 'Messenger',
      submit: 'Send request',
      sending: 'Sending…',
      success: 'Thank you! Your request has been sent.',
      error: 'Could not send the request. Email office@kao.delivery.',
    },
    contacts: {
      title: 'Contacts',
      company: 'KAO DELIVERY LLC',
      address: '4 Viacheslava Chornovola St, office 33, Odesa, 65012, Ukraine',
      route: 'Get directions',
    },
    footer: 'International container shipping and end-to-end logistics support.',
  },
};

const serviceIcons = [Route, FileText, Ship, Truck];
const advantageIcons = [ShieldCheck, Truck, Globe2, ArrowRight, FileText, Ship];

function Reveal({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
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
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="KAO Delivery">
          <img src="/logo-kao.svg" alt="KAO Delivery" />
        </a>

        <nav className={`main-nav ${menuOpen ? 'main-nav--open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>{t.nav.services}</a>
          <a href="#advantages" onClick={() => setMenuOpen(false)}>{t.nav.advantages}</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>{t.nav.contacts}</a>
        </nav>

        <div className="header-actions">
          <div className="language-switch">
            <button className={language === 'uk' ? 'is-active' : ''} onClick={() => setLanguage('uk')}>UA</button>
            <span>/</span>
            <button className={language === 'en' ? 'is-active' : ''} onClick={() => setLanguage('en')}>EN</button>
          </div>
          <a className="header-cta" href="#quote">{t.cta}<ArrowDownRight size={17} /></a>
          <button className="menu-button" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-photo" aria-hidden="true" />
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-content">
            <motion.h1
              initial={reduced ? false : { opacity: 0, y: 36 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="hero-description"
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={reduced ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: .7, delay: .12 }}
            >
              {t.hero.text}
            </motion.p>
          </div>

          <motion.div
            className="hero-bottom"
            initial={reduced ? false : { opacity: 0 }}
            animate={reduced ? undefined : { opacity: 1 }}
            transition={{ duration: .7, delay: .22 }}
          >
            <p>{t.hero.note}</p>
            <div className="hero-actions">
              <a className="pill pill--light" href="#services">{t.hero.secondary}<ChevronRight size={17} /></a>
              <a className="pill" href="#quote">{t.hero.primary}<ArrowRight size={17} /></a>
            </div>
          </motion.div>
        </section>

        <section className="about section" id="about">
          <Reveal className="about-heading">
            <p className="kicker">{t.about.label}</p>
            <h2>{t.about.title}</h2>
            <div className="about-copy">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
            </div>
          </Reveal>

          <div className="about-gallery">
            <Reveal className="about-image about-image--large">
              <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=88" alt="Container ship and port" />
            </Reveal>
            <Reveal className="about-image" delay={.05}>
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=88" alt="Container terminal" />
            </Reveal>
            <Reveal className="about-image" delay={.1}>
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=88" alt="Logistics warehouse" />
            </Reveal>
          </div>
        </section>

        <section className="services section" id="services">
          <Reveal className="section-title-row">
            <h2>{t.services.title}</h2>
            <p>{t.services.intro}</p>
          </Reveal>

          <div className="service-list">
            {t.services.items.map((item, index) => {
              const Icon = serviceIcons[index];
              return (
                <Reveal key={item.title} delay={index * .04}>
                  <article className="service-row">
                    <span className="service-number">0{index + 1}</span>
                    <span className="service-icon"><Icon size={25} strokeWidth={1.5} /></span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <a href="#quote" aria-label={item.title}><ArrowRight size={20} /></a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="advantages" id="advantages">
          <div className="advantages-photo" aria-hidden="true" />
          <div className="advantages-shade" aria-hidden="true" />
          <div className="section advantages-inner">
            <Reveal><h2>{t.advantages.title}</h2></Reveal>
            <div className="advantages-grid">
              {t.advantages.items.map(([title, text], index) => {
                const Icon = advantageIcons[index];
                return (
                  <Reveal key={title} delay={index * .04}>
                    <article className="advantage-card">
                      <div className="advantage-top"><span>0{index + 1}</span><Icon size={22} strokeWidth={1.5} /></div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="quote-section" id="quote">
          <div className="section quote-grid">
            <Reveal className="quote-intro">
              <h2>{t.quote.title}</h2>
              <p>{t.quote.text}</p>
              <div className="direct-links">
                <a href="tel:+380966938465"><Phone size={17} />+380 96 693 84 65</a>
                <a href="mailto:office@kao.delivery"><Mail size={17} />office@kao.delivery</a>
              </div>
            </Reveal>

            <Reveal>
              <form className="quote-form" onSubmit={submitQuote}>
                <input className="honeypot" type="text" name="website" tabIndex="-1" autoComplete="off" />
                <div className="form-row">
                  <label><span>{t.quote.name}</span><input name="name" required /></label>
                  <label><span>{t.quote.phone}</span><input name="phone" type="tel" required /></label>
                </div>
                <label><span>{t.quote.email}</span><input name="email" type="email" required /></label>
                <label><span>{t.quote.details}</span><textarea name="details" rows="4" required /></label>
                <fieldset>
                  <legend>{t.quote.reply}</legend>
                  <label><input type="radio" name="replyVia" value="phone" defaultChecked /> {t.quote.phoneReply}</label>
                  <label><input type="radio" name="replyVia" value="email" /> {t.quote.emailReply}</label>
                  <label><input type="radio" name="replyVia" value="messenger" /> {t.quote.messenger}</label>
                </fieldset>
                <button className="form-button" type="submit" disabled={formState === 'sending'}>
                  {formState === 'sending' ? t.quote.sending : t.quote.submit}<Send size={17} />
                </button>
                {formState === 'success' && <p className="form-status success">{t.quote.success}</p>}
                {formState === 'error' && <p className="form-status error">{t.quote.error}</p>}
              </form>
            </Reveal>
          </div>
        </section>

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
              <h2>{t.contacts.title}</h2>
              <div className="contact-list">
                <div><MapPin /><p><strong>{t.contacts.company}</strong><span>{t.contacts.address}</span></p></div>
                <div><Phone /><a href="tel:+380966938465">+380 96 693 84 65</a></div>
                <div><Mail /><a href="mailto:office@kao.delivery">office@kao.delivery</a></div>
              </div>
              <a className="pill pill--light" href="https://www.google.com/maps/search/?api=1&query=4+Viacheslava+Chornovola+St+Odesa+Ukraine" target="_blank" rel="noreferrer">
                {t.contacts.route}<ArrowRight size={17} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand brand--footer" href="#top"><img src="/logo-kao.svg" alt="KAO Delivery" /></a>
        <p>{t.footer}</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
