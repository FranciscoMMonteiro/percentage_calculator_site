import { useEffect, useState } from 'react';
import { SiteContext } from './siteContext';
import { translations } from '../translations';
import { DEFAULT_LOCALE } from '../config/site';

const SEPARATOR_KEY = 'percentage_calculator_separator';

export const SiteProvider = ({ locale, page, children }) => {
  // Never read localStorage during render — this component also runs on the
  // build-time SSG pass, where `window` does not exist, and the first client
  // render has to match the pre-rendered HTML exactly.
  const [decimalSeparator, setDecimalSeparator] = useState('.');

  // Restoring a browser-only preference is only possible after hydration, so
  // the extra render here is unavoidable and happens once.
  useEffect(() => {
    const saved = localStorage.getItem(SEPARATOR_KEY);
    if (saved !== '.' && saved !== ',') return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDecimalSeparator(saved);
  }, []);

  const changeSeparator = (next) => {
    setDecimalSeparator(next);
    localStorage.setItem(SEPARATOR_KEY, next);
  };

  const value = {
    locale,
    page,
    t: translations[locale] ?? translations[DEFAULT_LOCALE],
    decimalSeparator,
    changeSeparator
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

export default SiteProvider;
