import { Resources } from '@sideroad/react-i18n';

// Please change here if supported language changed
export const supportedLanguage = ['en-us', 'ja-jp'];

// Please change here if assinable language changed
// If user's language matched with below, it will be go through fallback language to simplified locales
export const assignableLanguage = ['en-us', 'ja-jp', 'en', 'ja'];

// Please change here if default language changed
export const fallbackLanguage = 'en-us';

// Please change here if fallback logic changed
// All dest language should be exists on supportedLanguage
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
