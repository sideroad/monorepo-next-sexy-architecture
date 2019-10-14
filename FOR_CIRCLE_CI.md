This project applied circle CI for project itself.
After you forked, you can customize build process to make your own CI.
Default CI is create `hello-world` application and deploy onto firebase.

1. Sign up circle CI
2. Add project from https://circleci.com/add-projects
3. Remove configuration below
```
- run: |
  yarn
  yarn create-app -n hello-world
  yarn apply-firebase -n hello-world -i hello-world-33549
```

4. Change applcation name to your own from `cd apps/hello-world` to `cd apps/${your_own_app}`
5. `firebase login:ci` to get token
6. Set environment variable on circle CI. Set variable `FIREBASE_TOKEN` with the token value.
7. Make a commit on master branch. 🎉🎉🎉
