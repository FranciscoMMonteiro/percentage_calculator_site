import './Prose.css';

const Block = ({ block }) => {
  if (typeof block === 'string') return <p>{block}</p>;
  if (block.h) return <h3>{block.h}</h3>;
  if (block.formula) return <p className="prose-formula">{block.formula}</p>;
  if (block.note) return <p className="prose-note">{block.note}</p>;
  if (block.ul) {
    return (
      <ul>
        {block.ul.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }
  if (block.ol) {
    return (
      <ol>
        {block.ol.map((item, index) => <li key={index}>{item}</li>)}
      </ol>
    );
  }
  if (block.table) {
    return (
      <div className="prose-table-wrap">
        <table className="prose-table">
          <thead>
            <tr>
              {block.table.head.map((cell, index) => <th key={index} scope="col">{cell}</th>)}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  cellIndex === 0
                    ? <th key={cellIndex} scope="row">{cell}</th>
                    : <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};

/**
 * Renders the block arrays used by everything under src/content.
 */
const Prose = ({ sections }) => (
  <>
    {sections.map((section) => (
      <section key={section.id} id={section.id} className="prose-section">
        <h2>{section.heading}</h2>
        {section.blocks.map((block, index) => <Block key={index} block={block} />)}
      </section>
    ))}
  </>
);

export default Prose;
