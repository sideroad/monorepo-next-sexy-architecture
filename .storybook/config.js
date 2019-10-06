import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  const req = require.context("../apps", true, /\.stories\.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);