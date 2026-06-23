import ExamplesSection from './ExamplesSection';
import RelatedCalculators from './RelatedCalculators';
import './Hero.css';

const Hero = ({
  t,
  examplesMain,
  examplesMore,
  showMoreExamples,
  onToggleExamples,
  onExampleSelect
}) => {
  return (
    <section className="hero">
      <ExamplesSection
        t={t}
        examplesMain={examplesMain}
        examplesMore={examplesMore}
        showMoreExamples={showMoreExamples}
        onToggleExamples={onToggleExamples}
        onExampleSelect={onExampleSelect}
      />
      <RelatedCalculators t={t} />
    </section>
  );
};

export default Hero;
