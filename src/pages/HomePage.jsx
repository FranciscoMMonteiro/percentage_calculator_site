import { useSite } from '../context/siteContext';
import { getContent } from '../content';
import Seo from '../components/Seo';
import Calculator from '../components/Calculator';
import Prose from '../components/Prose';
import FaqList from '../components/FaqList';
import RelatedCalculators from '../components/RelatedCalculators';
import './Page.css';

const HomePage = () => {
  const { t, locale } = useSite();
  const content = getContent(locale, 'home');

  return (
    <>
      <Seo locale={locale} page="home" faq={content.faq} isCalculator />

      <header className="page-header">
        <h1>{content.title}</h1>
        <p className="page-lead">{content.lead}</p>
      </header>

      <Calculator initialMode="percent_of" showExamples />

      <RelatedCalculators />

      <article className="page-article">
        <Prose sections={content.sections} />
        {content.faq?.length > 0 && (
          <FaqList heading={t.section_faq} items={content.faq} />
        )}
      </article>
    </>
  );
};

export default HomePage;
