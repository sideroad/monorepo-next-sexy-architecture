import { Resources } from '@sideroad/react-i18n';
const supportedLanguage = ['en', 'ja'];
const locales: Resources = {};
supportedLanguage.forEach(lang => {
  locales[lang] = require(`./${lang}.json`);
});

export default locales;
export const defaultLanguage = 'en';
