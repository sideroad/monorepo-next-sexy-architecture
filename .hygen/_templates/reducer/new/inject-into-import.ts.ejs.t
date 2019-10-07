---
to: reducers/index.ts
inject: true
skip_if: "import <%= name %> from './<%= name %>';"
before: "import { createStore, applyMiddleware, combineReducers } from 'redux';"
---
import <%= name %> from './<%= name %>';