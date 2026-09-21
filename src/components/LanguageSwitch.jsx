export default function LanguageSwitch({
  language,
  onChange,
  mobile = false,
}) {
  return (
    <div
      className={mobile ? 'mobile-language-switch' : 'language-switch'}
      aria-label="Language"
    >
      <button
        type="button"
        className={language === 'uk' ? 'is-active' : ''}
        onClick={() => onChange('uk')}
      >
        UA
      </button>
      <span>/</span>
      <button
        type="button"
        className={language === 'en' ? 'is-active' : ''}
        onClick={() => onChange('en')}
      >
        EN
      </button>
    </div>
  );
}
