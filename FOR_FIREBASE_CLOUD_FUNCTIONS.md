If you want to deploy on Firebase hosting + Firebase cloud hosting.
Please follow procedure below

1. Install firebase-tools `npm i -g firebase-tools`
2. Create a project through the https://console.firebase.google.com/ and get project-id
3. Login firebase `firebase login`
4. Execute convert to firebase project command on monorepot root folder.
```
yarn apply-firebase -n ${target_application} -i ${project-id}
```
4. `cd ${target_application}`
5. `yarn deploy`