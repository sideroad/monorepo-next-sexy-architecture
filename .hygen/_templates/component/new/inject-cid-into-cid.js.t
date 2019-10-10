---
to: cid.js
inject: true
skip_if: "export const <%= h.inflection.underscore(name).toUpperCase() %> = "
after: "export"
---
export const <%= h.inflection.underscore(name).toUpperCase() %> = '<%= h.assignId() %>';