# **Final Project - Restaurant app to track customer credits**

# Description
This is an app for restaurants to track credits to customer accounts.

# Demo
![Screenshot](./public/gitcredit.png)

# Technologies
Front end:
    Axios
    react
    react-dom
    react-router-dom
    react-scripts
    react-share
    web-vitals
    nodemon

Back end:
    bcrypt
    dotenv
    express
    mongoose
    multer
    nodemon
    path

# Run the app
1. clone the respository
2. run npm i inside the main savings-tracker-1 folder to install all neccessary packages.
3. use start command nodemon on the backend folder to start the back end, and npm start in the main savings-tracker-1 folder to start the front end.
4. go to http://localhost:3000 to visit the homepage.

# To Do
1. Fix the Login and Registration forms to connect to the back end.
2. Develop the Log Out button.
3. Fix the app so that after login the client will then see their account rather than have the information on the homepage.
4. Work on additional styling.

# Issues
1. login and registration works in the back end, but not in the front end.
2. The client can see their logged credits and create new credits without logging in. We were trying to route the client to their logged credits and create new credits after successful login. However the login and registration pages do not work, so instead we have the information on the homepage for now.
3. The logout button isn't linking so the client can't logout.


# Developers
1. Tsilos K.
2. Krystal M.
3. Mary C.
4. Leonel A.