import acceptLanguage from 'accept-language';
import { assignableLanguage, fallback } from '../locales';

export default ({ req, res, query }) => {
  if (!req || query.lang) {
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
