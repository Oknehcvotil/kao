import Logo from './Logo';

export default function Footer({ text }) {
  return (
    <footer className="site-footer">
      <Logo footer />
      <p>{text}</p>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  );
}
