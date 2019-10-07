---
to: reducers/index.ts
inject: true
skip_if: "      <%= name %>,"
after: \s*combineReducers\(\{
---
      <%= name %>,