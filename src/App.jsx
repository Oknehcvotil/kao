import { useEffect, useState } from 'react';

import AboutSection from './components/AboutSection';
import AdvantagesSection from './components/AdvantagesSection';
import ContactsSection from './components/ContactsSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import ServicesSection from './components/ServicesSection';
import { content } from './data/content';

const getInitialLanguage = () =>
  localStorage.getItem('kao-language') || 'uk';

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const text = content[language] || content.uk;

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('kao-language', language);
  }, [language]);

  return (
    <div className="site-shell">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        text={text}
      />

      <main>
        <Hero text={text.hero} />
        <AboutSection text={text.about} />
        <ServicesSection text={text.services} />
        <AdvantagesSection text={text.advantages} />
        <QuoteSection language={language} text={text.quote} />
        <ContactsSection text={text.contacts} />
      </main>

      <Footer text={text.footer} location={text.footerLocation} />
    </div>
  );
}
