import { Resources } from '@sideroad/react-i18n';

// Please change here if supported language changed
const supportedLanguage = ['en', 'ja'];

// Please change here if default language changed
export const defaultLanguage = 'en';

const locales: Resources = {};
supportedLanguage.forEach(lang => {
  locales[lang] = require(`./${lang}.json`);
});

export default locales;
