---
to: components/nextbook.tsx
inject: true
skip_if: "import <%= Name %> from './<%= name %>';"
after: "import React from 'react';"
---
import <%= Name %> from './<%= name %>';