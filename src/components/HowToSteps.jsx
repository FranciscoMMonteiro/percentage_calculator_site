import './Prose.css';

/**
 * The visible counterpart of the HowTo schema in Seo.jsx. These steps used to
 * exist only as JSON-LD, which meant the structured data described a procedure
 * no visitor could actually read.
 */
const HowToSteps = ({ howTo }) => {
  if (!howTo?.steps?.length) return null;

  return (
    <section id="step-by-step" className="prose-section">
      <h2>{howTo.name}</h2>
      <ol className="howto-steps">
        {howTo.steps.map((step) => (
          <li key={step.name}>
            <strong>{step.name}.</strong> {step.text}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowToSteps;
