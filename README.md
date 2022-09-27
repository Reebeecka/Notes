Created noteApp to make new notes and edit old ones with a MySql database. 
In the repo I have included a sample sql file. Just import that file in your database to get started. 

There is a user to test with: 
Username: test, password: test. 
But you can also create your own user if you want with the create user button. 

To start the project clone the repo to you computer then go into you database to check your connectionport. Project is set up to port 3306. If you have a different port then change the port in app.js on row 17. 

After that you can in backend folder run npm install. 
This will install express, cors, morgan, mySql2.

Then you can install backend with nmp start. (IMPORTANT to do this before you start the frontEnd. Otherwise it will not work.)

When the backend is running go to your frontEnd folder and run nmp install. 
This will install react, react-router-dom, axios and tinymce. 
Then you can run the command npm start.
You will be prompted to change server from 3000 if the backend is already running. Press yes.
Now the application will work.

