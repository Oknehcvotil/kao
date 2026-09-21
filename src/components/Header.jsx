import { useEffect, useState } from 'react';
import { ArrowDownRight, Menu, X } from 'lucide-react';

import LanguageSwitch from './LanguageSwitch';
import Logo from './Logo';

export default function Header({ language, onLanguageChange, text }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 980) {
        setMenuOpen(false);
      }
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnDesktop);
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('resize', closeOnDesktop);
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const changeMobileLanguage = (nextLanguage) => {
    onLanguageChange(nextLanguage);
    closeMenu();
  };

  return (
    <header className="site-header">
      <Logo onClick={closeMenu} />

      <nav
        id="main-navigation"
        className={menuOpen ? 'main-nav main-nav--open' : 'main-nav'}
      >
        <LanguageSwitch
          mobile
          language={language}
          onChange={changeMobileLanguage}
        />

        <a href="#about" onClick={closeMenu}>{text.nav.about}</a>
        <a href="#services" onClick={closeMenu}>{text.nav.services}</a>
        <a href="#advantages" onClick={closeMenu}>{text.nav.advantages}</a>
        <a href="#contacts" onClick={closeMenu}>{text.nav.contacts}</a>
      </nav>

      <div className="header-actions">
        <LanguageSwitch
          language={language}
          onChange={onLanguageChange}
        />

        <a className="header-cta" href="#quote">
          {text.cta}
          <ArrowDownRight size={17} />
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
