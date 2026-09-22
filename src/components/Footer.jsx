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
        <a
          className="footer-photo-credit"
          href="https://commons.wikimedia.org/wiki/File:The_Odessa_port_-_panoramio.jpg"
          target="_blank"
          rel="noreferrer"
        >
          Port photo: Valeriy Ded / CC BY 3.0
        </a>
      </div>
    </footer>
  );
}
