# Follow this instructions to build your first serverless app

Simple application with frontend and backend that says Hello and remembers everybody that it greets.

## Building the BACKEND

1. Go to the backend directory
```
$ npm init -y
```

2. Copy the file template.yml from base into your directory
````
$ cp base/template.yml template.yml
````

3. Create a hello directory in your project where your code will be.
````
$ mkdir hello
$ cd hello
$ npm init -y
````

4. Copy the handler.js file from base to this directory
````
$ cp ../base/handler.js handler.js
````

5. Deploy backend, do this from the backend directory
````
$ sam deploy --guided
````
Put the right name to your application and accept all defaults
Wait for it to deploy.

6. Try it in POSTMAN, you will get an URL back

## Building the FRONTEND

1. Go to the client directory and install all dependencies
````
$ npm install
````

2. Run the application
````
$ npm start
````

3. Replace App.js with the one in the base folder
````
$ cp base/App.js src/App.js
````

4. Copy the aws-config into the project and add the right configuration to it. You can get the values from the output of deploying the backend.
````
$ cp base/aws-config_SAMPLE.js src/aws-config.js
````

5. Ready to try :) 
