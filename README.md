# Prerequisition
This monorepo is optimize for developer who use vscode.

# Features
- Manage apps in monorepo
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
