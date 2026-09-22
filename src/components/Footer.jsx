import Logo from './Logo';

export default function Footer({ text, location }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Logo footer />

        <p className="footer-description">{text}</p>

        <p className="footer-location">{location}</p>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
