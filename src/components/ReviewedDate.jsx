import { useSite } from '../context/siteContext';
import { getReviewed } from '../config/reviewed';
import { HREFLANG } from '../config/site';
import './Prose.css';

/**
 * When the page was last checked over. The readable form is derived from the
 * ISO string rather than stored twice, so the two cannot drift apart.
 */
const ReviewedDate = () => {
  const { t, locale, page } = useSite();
  const date = getReviewed(page);
  if (!date) return null;

  const readable = new Date(`${date}T00:00:00Z`).toLocaleDateString(HREFLANG[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });

  return (
    <p className="page-reviewed">
      {t.reviewed_label} <time dateTime={date}>{readable}</time>
    </p>
  );
};

export default ReviewedDate;
