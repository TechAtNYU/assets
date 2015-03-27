### Build tool

A couple build tools we use at Tech@NYU too run our servers. We have a lot of tools to help us automate our builds, and allow us to have minimal interaction with our servers. 

- Githook: Using Githook to pull the git directory onto the server and perform some restart. 
- CircleCI: Using CircleCI build API to automatically launch a build every hour. 
- Turbolift: Syncing directories with our Rackspace Cloud Files containers.