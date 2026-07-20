import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { translations } from '../translations';
import { DEFAULT_LOCALE } from '../config/site';
import './Page.css';

/**
 * Rendered outside the locale layouts, so it reads translations directly
 * instead of going through SiteContext.
 */
const NotFoundPage = () => {
  const t = translations[DEFAULT_LOCALE];

  return (
    <div className="app-container">
      <Head>
        <title>{`${t.not_found_title} — ${t.title}`}</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <main id="main" className="page">
        <article className="page-article page-article--standalone">
          <h1>{t.not_found_title}</h1>
          <p className="page-lead">{t.not_found_text}</p>
          <p><Link to="/">{t.not_found_link}</Link></p>
        </article>
      </main>
    </div>
  );
};

export default NotFoundPage;
