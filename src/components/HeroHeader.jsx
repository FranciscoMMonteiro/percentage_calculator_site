const HeroHeader = ({ t }) => {
  return (
    <div className="hero-header">
      <h1>{t.title}</h1>
      <div className="hero-badges">
        <span>{t.badge_no_signup}</span>
        <span>{t.badge_fast}</span>
        <span>{t.badge_mobile}</span>
      </div>
    </div>
  );
};

export default HeroHeader;
