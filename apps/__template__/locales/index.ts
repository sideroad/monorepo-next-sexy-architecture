/**
 * Language assignment on URL
 * 1. If lang is exists on URI and if it is supported language end up logic and gothrough as usual
 * 2. Check accept-language and check assignableLanguage first. If it is not matched, fallback to fallbackLanguage
 * 3. Matched assignableLanguage will be pass to fallback function to get final local
 */

import { Resources } from '@sideroad/react-i18n';
import acceptLanguage from 'accept-language';

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

export const assignUrl = ({ req, res, query }) => {
  if (!req || supportedLanguage.find(lang => lang === query.lang)) {
    return;
  } else {
    const matched = supportedLanguage.find(lang =>
      new RegExp(`^/${lang}`).test(req.url)
    );
    if (matched) {
      return;
    }
    acceptLanguage.languages(assignableLanguage);
    const assignedLanguage = fallback(
      acceptLanguage.get(req.headers['accept-language'])
    );
    res.setHeader(
      'Location',
      `/${assignedLanguage}${req.url.match(/^\/(\?.+)?$/) ? '' : req.url}`
    );
    res.statusCode = 302;
    res.end();
  }
};

export default locales;
