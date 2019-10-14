# Prerequisition
This monorepo is progressive DevX for developer who use vscode.

# Features
- Manage next.js apps in monorepo
- Easy to create new app
- Customizable blueprints
- Jest in default
- i18n with URL assignment
- Components book page ( nextbook )
- PWA in default
- Enforce to install vscode extensions
- Precommit hook to execute lint, test
- Declarable fetch and simplified redux

## install
```
yarn
```

## create new app
```
yarn create-app -n hello-world
```

## start up dev server
```
cd apps/hello-world
yarn dev

open http://localhost:3000 # open app
open http://localhost:3000/_nextbook # open component book
```

## test
```
cd apps/hello-world
yarn test
```

## generate code from blueprint
```
cd apps/hello-world
yarn gen-component hogehoge # Generate component
yarn gen-page hogehoge # Generate page
yarn gen-reducer hogehoge # Generate reducer with fetcher setting
yarn gen-pure-reducer hogehoge # Generate pure reducer
```

## Environment variable strategy
For browser environments variables, it would be better to be same values across environments.
For server environment variables, it would be better to separated in each environments.

### For both of browser and server variables
put values under config.js directly
```
# config.js
export default {
  ...
  meta: {
    title: 'hello-world'
  },
  ...
};
```

### For only server side variables
put variables under config.js throughout process.env

In case of non-secure value, Recommended to configure under `.env` file. and prepare CI/CD process for each environment to copy from .${env}.env to .env. put access logic under `config.js` to get variables throughout `process.env`
```
# .env
API_HOST=api.github.com

# config.js
export default {
  ...
  api: {
    host: process.env.API_HOST
  },
  ...
};
```

In case of secure value, DON'T put variables under `.env` file. Each server better to configure. put access logic under `config.js` to get variables throughout `process.env`
```
# config.js
export default {
  ...
  api: {
    host: process.env.SECRET_KEY
  },
  ...
};
```

# For firebase deployment
Check https://github.com/sideroad/monorepo-next-sexy-architecture/blob/master/FOR_FIREBASE_CLOUD_FUNCTIONS.md for more detail