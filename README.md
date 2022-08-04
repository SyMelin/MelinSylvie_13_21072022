# Project 12 - Sportsee

This project for the Argent Bank app, designed to be a frontend project, is connected to a micro API backend service that must be launched locally.
The repository contains all the source code for both frontend and backend parts.

## 1. General information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 2. Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

## 3. Launching the project

### 3.1 Fork the repository : 

https://github.com/SyMelin/MelinSylvie_13_21072022.git

### 3.2 Clone the project on your computer.

### 3.3 Install project dependancies :
```
npm install
```

### 3.4 Argent Bank backend

#### 3.4.1 Go to the project directory :
```
cd argent-bank-back
```

#### 3.4.2 Run the micro API locally :
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

#### 3.4.3 Access to the micro API :

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

#### 3.4.4 Populated Database Data :

Once you run the `populate-db` script, you should have two users in your database:

##### 3.4.4.4.1 Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

##### 3.4.4.4.2 Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

#### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs


### 3.5 Argent Bank frontend

#### 3.5.1 Go to the project directory :
```
cd argent-bank-front
```

#### 3.5.2 Launch the application :
```
npm run start
```

#### 3.5.3 Access to the application :

The API is locally available on port `3000`, go to `http://localhost:3000`