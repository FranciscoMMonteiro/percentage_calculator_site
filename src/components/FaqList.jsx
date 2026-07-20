import './Prose.css';

/**
 * The visible counterpart of the FAQPage schema emitted by Seo.jsx — Google
 * requires the answers to be present in the markup, not only in JSON-LD.
 */
const FaqList = ({ heading, items }) => (
  <section id="faq" className="prose-section">
    <h2>{heading}</h2>
    <dl className="faq-list">
      {items.map(({ q, a }) => (
        <div key={q} className="faq-item">
          <dt>{q}</dt>
          <dd>{a}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default FaqList;
