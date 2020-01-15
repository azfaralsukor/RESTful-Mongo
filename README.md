# RESTful API Server with MongoDB

ExpressJS' RESTful API with MongoDB server for [client](https://github.com/azfaralsukor/CDNFreelancers).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### File structure
You should have these files after cloning.
```
.
|____LICENSE
|____server.js
|____utils
| |____validator.js
|____models
| |____user.js
|____README.md
|____package.json
|____routes
| |____user.js
```
### Prerequisites

You should have these installed on your machine before getting started
* [git](https://git-scm.com/)
* [NodeJS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Visual Studio Code](https://code.visualstudio.com/)_(optional)_ 
* [Robo3T](https://robomongo.org/)_(optional)_ 

### Clone / Download

You may download ZIP file and extract the files, clone with [GitHub Desktop](https://desktop.github.com/), or

```
cd /your-desired-path
git clone https://github.com/azfaralsukor/RESTful-Mongo.git
```

### Installing

```
cd RESTful-Mongo
npm install
echo "MONGO_URL=mongodb://localhost:27017/CDNFreelancers" >> .env
```
.env is for process.env variables. Finally,
```
npm start
```

There you have it a simple REST API server on your machine.

## Deployment

Login or [create](https://signup.heroku.com/) a heroku account and press the button below to host as your own.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Built With

* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/) - The framework
* [Mongoose](https://mongoosejs.com/) - MongoDB object modelling

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
