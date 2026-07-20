import { useSite } from '../context/siteContext';
import { getContent } from '../content';
import { CALCULATOR_PRESETS, getPath } from '../config/routes';
import Seo from '../components/Seo';
import Calculator from '../components/Calculator';
import Breadcrumbs from '../components/Breadcrumbs';
import Prose from '../components/Prose';
import FaqList from '../components/FaqList';
import RelatedCalculators from '../components/RelatedCalculators';
import './Page.css';

const PresetCalculatorPage = ({ page }) => {
  const { t, locale } = useSite();
  const content = getContent(locale, page);

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

      <Calculator initialMode={CALCULATOR_PRESETS[page].mode} />

      <article className="page-article">
        <Prose sections={content.sections} />
        {content.faq?.length > 0 && (
          <FaqList heading={t.section_faq} items={content.faq} />
        )}
      </article>

      <RelatedCalculators exclude={page} />
    </>
  );
};

export default PresetCalculatorPage;
