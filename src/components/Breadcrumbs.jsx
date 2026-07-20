import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

/**
 * Visible counterpart of the BreadcrumbList schema in Seo.jsx. The last crumb
 * is the current page and is not a link.
 */
const Breadcrumbs = ({ trail, label }) => {
  if (!trail || trail.length < 2) return null;

  return (
    <nav className="breadcrumbs" aria-label={label}>
      <ol>
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path}>
              {isLast
                ? <span aria-current="page">{crumb.label}</span>
                : <Link to={crumb.path}>{crumb.label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
