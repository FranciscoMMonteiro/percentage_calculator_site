const RelatedCalculators = ({ t }) => {
  return (
    <div className="hero-section">
      <h2>{t.section_related}</h2>
      <div className="pill-grid">
        <a
          className="pill"
          href="https://www.matrixcalc.net/"
          target="_blank"
          rel="noreferrer"
        >
          {t.related_matrix}
        </a>
        <a
          className="pill"
          href="https://www.calcworkdays.com/"
          target="_blank"
          rel="noreferrer"
        >
          {t.related_work_days}
        </a>
      </div>
    </div>
  );
};

export default RelatedCalculators;
