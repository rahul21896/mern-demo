# Mern Demo
Example Project on how to create MERN Stack

#### Follow Below Command To Setup Server with Node.js and Express
- ```mkdir mern-demo```
- ```cd mern-demo```
- ```mkdir server```
- ```cd server```
- ```npm init```
- Add Below Code into package.json file 
     ```
    "dependencies": {
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "mongodb": "^3.6.3",
        "mongoose": "^5.11.10",
        "pine": "^1.1.1"
      },
      "devDependencies": {
        "del": "^6.0.0",
        "fancy-log": "^2.0.0",
        "gulp": "^4.0.2",
        "gulp-zip": "^5.1.0",
        "nodemon": "^2.0.7",
        "webpack": "^5.68.0",
        "webpack-cli": "^4.9.2",
        "webpack-stream": "^7.0.0"
      }
    ```
- Run ```npm install```
- Add Following command into package.json
    ```
  "scripts": {
      "dev": "nodemon -L ./start.js localhost 3080",
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "ENVIRONMENT=$ENVIRONMENT webpack",
      "prod-build": "ENVIRONMENT='production' gulp"
    },
    ```
- Create **start.js** file into **server** folder
- Create **.env** file and add following enviroment variable
    ```
    ENVIRONMENT=dev
    MONGO_CONNECTION_STRING=mongodb+srv://rdadmin:RRahul21896@rdlearning.w6rfg51.mongodb.net/killer
    ```
