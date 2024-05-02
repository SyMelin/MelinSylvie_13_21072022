# Project 13 - Argent Bank

Welcome to the Argent Bank app, a frontend project for the OpenClassrooms training program. This repository contains all the source code for both frontend and backend parts. The frontend was cloned from [OpenClassrooms-Student-Center/Project-10-Bank-API](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git). The backend is a micro API service that must be launched locally.

## 1. Project Overview

The goal of this project is to create a responsive web application for ARGENTBANK, a fictional new bank. The application allows clients to authenticate, manage their accounts, and update their profiles. Backend transaction features are currently in design, with API endpoints specified in a Swagger file. Redux is used for state management.

### 1.1 Frontend

- **React**: For building the user interface.
- **Redux**: For state management.
- **PropTypes**: For component type-checking.
- **Axios**: For making HTTP calls.
- **CSS3**: For styling and responsive design.

### 1.2 Backend

- **Local Micro API**: The backend is a micro API that must be launched locally.

## 2. Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v20.12.0](https://nodejs.org/en/) Ensure Node.js is installed. Check with `node --version`.
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

- **Npm**: For dependency management

## 3. Installation and Setup

To install and run the project locally, follow these steps:

### 3.1 Clone the repository : 

https://github.com/SyMelin/MelinSylvie_13_21072022.git

### 3.2 Navigate to the Project Directory :

```bash
cd argent-bank-app
```

### 3.3 Argent Bank backend

#### 3.3.1 Go to the project directory :
```
cd argent-bank-back
```

### 3.3.2 Install project dependencies :
```
npm install
```

#### 3.3.3 Run the micro API locally :

# Start local dev server
```
npm run dev:server
```

# Populate database with two users
```
npm run populate-db
```

#### 3.3.4 Access to the micro API :

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

#### 3.3.4 Populated Database Data :

Once you run the `populate-db` script, you should have two users in your database:

```bash
# Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

# Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`
```

#### 3.3.5 API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs


### 3.4 Argent Bank frontend

#### 3.4.1 Go to the project directory :
```
cd argent-bank-front
```

### 3.4.2 Install project dependancies :
```
npm install
```

#### 3.4.3 Launch the application :
```
npm start
```

#### 3.4.4 Access to the application :

The app is locally available on port `3000`, go to `http://localhost:3000`

## 4. Github Page Version

The Github Page version of this project is a slightly adapted version of the original application, which was designed to work with a local micro API for user authentication and data handling.

Due to the limitations of Github Pages (which only hosts static web pages), the local API was replaced by mocked data and mock requests. This allows the application to mimic the behaviour of the original version, providing a realistic demonstration of its functionality without the need for a live backend server.

The mocked data includes pre-defined user credentials that can be used to simulate user login. Once "logged in", the application behaves just as it would if it were communicating with a real backend server, allowing users to interact with the profile page (edit name form functional).

Please note that since the data is mocked, any changes made (like updating user information) will not persist after the page is refreshed.

## 5. License

This project is licensed under the MIT License. See the LICENSE file for more information.