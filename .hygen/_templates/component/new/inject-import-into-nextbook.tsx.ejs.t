---
to: components/_nextbook.tsx
inject: true
skip_if: "import <%= h.inflection.camelize(name) %> from './<%= name %>';"
after: "import React from 'react';"
---
import <%= h.inflection.camelize(name) %> from './<%= name %>';