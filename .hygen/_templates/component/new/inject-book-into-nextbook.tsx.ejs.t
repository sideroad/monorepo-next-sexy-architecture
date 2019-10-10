---
to: components/_nextbook.tsx
inject: true
skip_if: "name: '<%= h.inflection.camelize(name) %>',"
after: \s*books:\s*\[
---
    {
      name: '<%= h.inflection.camelize(name) %>',
      desc: 'AWESOME component!',
      component: <<%= h.inflection.camelize(name) %> onClick={() => console.log('clicked')} />
    },