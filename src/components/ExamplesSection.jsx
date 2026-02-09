const ExamplesSection = ({
  t,
  examplesMain,
  examplesMore,
  showMoreExamples,
  onToggleExamples,
  onExampleSelect
}) => {
  return (
    <div className="hero-section">
      <h2>{t.section_examples}</h2>
      <div className="pill-grid">
        {examplesMain.map((example) => (
          <button
            key={example.id}
            className="pill"
            onClick={() => onExampleSelect(example)}
          >
            {t[example.labelKey]}
          </button>
        ))}
      </div>
      <button
        className="link-button"
        onClick={onToggleExamples}
        aria-expanded={showMoreExamples}
        aria-controls="more-examples"
      >
        {showMoreExamples ? t.link_examples_close : t.link_examples_open}
      </button>
      {showMoreExamples && (
        <div className="pill-grid examples-more" id="more-examples">
          {examplesMore.map((example) => (
            <button
              key={example.id}
              className="pill"
              onClick={() => onExampleSelect(example)}
            >
              {t[example.labelKey]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExamplesSection;
