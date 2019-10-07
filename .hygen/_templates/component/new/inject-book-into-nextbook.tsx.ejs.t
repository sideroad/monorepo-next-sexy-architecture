---
to: components/nextbook.tsx
inject: true
skip_if: "name: '<%= Name %>',"
after: \s*books:\s*\[
---
    {
      name: '<%= Name %>',
      desc: 'AWESOME component!',
      component: <<%= Name %> onClick={() => console.log('clicked')} />
    },