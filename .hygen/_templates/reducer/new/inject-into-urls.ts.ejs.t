---
to: urls.ts
inject: true
skip_if: "  <%= name %>: {"
after: "const urls: Urls = {"
---
  <%= name %>: {
    get: {
      url: `https://${config.api.host}/<%= name %>s/[id]`,
      method: 'GET'
    },
    gets: {
      url: `https://${config.api.host}/<%= name %>s`,
      method: 'GET'
    }
  },