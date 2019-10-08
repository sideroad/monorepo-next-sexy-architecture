import { Resources } from '@sideroad/react-i18n';

// Please change here if supported language changed
export const supportedLanguage = ['en-us', 'ja-jp'];

// Please change here if assinable language changed
export const assignableLanguage = ['en-us', 'ja-jp', 'en', 'ja'];

// Please change here if default language changed
export const fallbackLanguage = 'en-us';

// Please change here if fallback logic changed
export const fallback = (lang?: string) => {
  return (
    {
      ja: 'ja-jp',
      en: 'en-us'
    }[lang] || lang
  );
};

const locales: Resources = {};
supportedLanguage.forEach(lang => {
  locales[lang] = require(`./${lang}.json`);
});

export default locales;
