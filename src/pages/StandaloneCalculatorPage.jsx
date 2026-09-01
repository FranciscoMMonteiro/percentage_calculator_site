import { useSite } from '../context/siteContext';
import { getContent } from '../content';
import { getPath } from '../config/routes';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import Prose from '../components/Prose';
import HowToSteps from '../components/HowToSteps';
import FaqList from '../components/FaqList';
import ReviewedDate from '../components/ReviewedDate';
import RelatedCalculators from '../components/RelatedCalculators';
import SalaryCalculator from '../components/SalaryCalculator';
import PointsCalculator from '../components/PointsCalculator';
import './Page.css';

/**
 * The calculators whose arithmetic the three-field solver cannot express, each
 * with its own hook and form.
 */
const TOOLS = {
  salary: SalaryCalculator,
  points: PointsCalculator
};

const StandaloneCalculatorPage = ({ page }) => {
  const { t, locale } = useSite();
  const content = getContent(locale, page);
  const Tool = TOOLS[page];

  const trail = [
    { label: t.nav_home, path: getPath(locale, 'home') },
    { label: t[`nav_${page}`], path: getPath(locale, page) }
  ];

  return (
    <>
      <Seo
        locale={locale}
        page={page}
        breadcrumbs={trail}
        faq={content.faq}
        howTo={content.howTo}
        isCalculator
      />

      <Breadcrumbs trail={trail} label={t.nav_home} />

      <header className="page-header">
        <h1>{content.title}</h1>
        <p className="page-lead">{content.lead}</p>
      </header>

      <Tool />

      <article className="page-article">
        <Prose sections={content.sections} />
        <HowToSteps howTo={content.howTo} />
        {content.faq?.length > 0 && (
          <FaqList heading={t.section_faq} items={content.faq} />
        )}
        <ReviewedDate />
      </article>

      <RelatedCalculators exclude={page} />
    </>
  );
};

export default StandaloneCalculatorPage;
