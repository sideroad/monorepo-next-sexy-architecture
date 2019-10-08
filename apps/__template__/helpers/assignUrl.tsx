import acceptLanguage from 'accept-language';
import { supportedLanguage, assignableLanguage, fallback } from '../locales';

export default ({ req, res, query }) => {
  if (!req || supportedLanguage.find(lang => lang === query.lang)) {
    return;
  } else {
    acceptLanguage.languages(assignableLanguage);
    const assignedLanguage = fallback(
      acceptLanguage.get(req.headers['accept-language'])
    );
    res.setHeader('Location', `/${assignedLanguage}${req.url}`);
    res.statusCode = 302;
    res.end();
  }
};
