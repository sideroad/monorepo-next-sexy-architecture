If you want to deploy on Firebase hosting + Firebase cloud hosting.
Please follow procedure below

```
1. Install firebase-tools `npm i -g firebase-tools`
2. Create a project through the https://console.firebase.google.com/
3. `yarn apply-firebase -n ${name_of_targe_application} -i ${project-id_which_assigned_page_above}`
4. `cd ${name_of_targe_application}`
5. `yarn deploy`