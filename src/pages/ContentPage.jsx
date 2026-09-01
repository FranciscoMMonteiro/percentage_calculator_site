import { useSite } from '../context/siteContext';
import { getContent } from '../content';
import { getPath } from '../config/routes';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import Prose from '../components/Prose';
import FaqList from '../components/FaqList';
import ReviewedDate from '../components/ReviewedDate';
import RelatedCalculators from '../components/RelatedCalculators';
import './Page.css';

/**
 * The prose pages with no calculator of their own: the guides, FAQ,
 * methodology, About, Contact, Privacy and Terms.
 */
const ContentPage = ({ page }) => {
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
      />

      <Breadcrumbs trail={trail} label={t.nav_home} />

      <article className="page-article page-article--standalone">
        <header className="page-header">
          <h1>{content.title}</h1>
          <p className="page-lead">{content.lead}</p>
        </header>

        <Prose sections={content.sections} />

        {content.faq?.length > 0 && (
          <FaqList heading={t.section_faq} items={content.faq} />
        )}

        <ReviewedDate />
      </article>

      <RelatedCalculators />
    </>
  );
};

export default ContentPage;
