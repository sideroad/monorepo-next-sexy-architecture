---
to: apps/<%= name %>/package.json
---
{
  "name": "<%=name%>",
  "version": "1.0.0",
  "scripts": {
    "dev": "npm-watch",
    "_dev": "next",
    "build": "next build",
    "start": "next start"
  },
  "watch": {
    "_dev": "locales/*.json"
  },
  "dependencies": {
    "@sideroad/react-i18n": "^1.0.30",
    "@sideroad/redux-fetch": "^1.0.31",
    "@sideroad/with-redux-store": "^1.0.30",
    "next": "^9.0.7",
    "react": "^16.10.1",
    "react-dom": "^16.10.1",
    "react-redux": "^7.1.1",
    "redux": "^4.0.4",
    "redux-devtools-extension": "^2.13.8"
  }
}
