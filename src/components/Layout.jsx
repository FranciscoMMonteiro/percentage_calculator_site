import { Outlet, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import SiteProvider from '../context/SiteProvider';
import { useSite } from '../context/siteContext';
import { resolveRoute } from '../config/routes';
import TopBar from './TopBar';
import Footer from './Footer';
import '../App.css';

const LayoutShell = () => {
  const { t } = useSite();

  return (
    <div className="app-container">
      <a className="skip-link" href="#main">{t.skip_to_content}</a>
      <TopBar />
      <main id="main" className="page">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

const Layout = ({ locale }) => {
  const { pathname } = useLocation();
  const { page } = resolveRoute(pathname);

  return (
    <SiteProvider locale={locale} page={page}>
      <LayoutShell />
    </SiteProvider>
  );
};

export default Layout;
