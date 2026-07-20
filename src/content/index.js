import en from './en';
import pt from './pt';
import es from './es';
import fr from './fr';
import de from './de';
import it from './it';
import { DEFAULT_LOCALE } from '../config/site';

const content = { en, pt, es, fr, de, it };

/**
 * Falls back to English so a page can never render blank if a locale is missing
 * a translation. `config/routes.js` is what decides which pages get built, so
 * in practice the fallback only guards against typos.
 */
export const getContent = (locale, page) =>
  content[locale]?.[page] ?? content[DEFAULT_LOCALE][page] ?? null;

export default content;
