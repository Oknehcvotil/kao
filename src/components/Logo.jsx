import { site } from '../config/site';

export default function Logo({ footer = false, onClick }) {
  return (
    <a
      className={footer ? 'brand brand--footer' : 'brand'}
      href="#top"
      onClick={onClick}
      aria-label="KAO Delivery"
    >
      <img src={site.logo} alt="KAO Delivery" />
    </a>
  );
}
