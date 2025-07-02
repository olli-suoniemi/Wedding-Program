# What

A modern wedding app that also contains form for enrollment. 

## Tech Stack

### Back

- **Node.js**: This is the main language this project is written in.
- **Express**: This is the web server framework used.
- **PostgreSQL (pg)**: This is the database used for this project.
- **bcrypt**: This library is used for hashing passwords.
- **jsonwebtoken**: This library is used for creating access tokens for secure routes.
- **cors**: This is used to enable CORS.
- **dotenv**: This is used to load environment variables from a .env file.
- **express-async-errors**: This library is used to handle async errors in Express.
- **morgan**: This is used as a HTTP request logger middleware for node.js.
- **moment**: This library is used to parse, validate, manipulate, and display dates and times in JavaScript.
- **nodemon**: This is used in development to automatically restart the node application when file changes in the directory are detected.
- **cross-env**: This library allows for setting environment variables in scripts, in a cross-platform way.
- **flyctl**: This is used to deploy the application.

### Front

- **React**: This is the main library this project is written in for building the user interface.
- **Redux and @reduxjs/toolkit**: These are used for state management in the application.
- **React Router Dom**: This is used for routing in the React application.
- **Axios**: This is used to make HTTP requests from the browser.
- **@emotion/react and @emotion/styled**: These are used for styling components in the application.
- **@mui/material and @mui/icons-material**: These are used for Material-UI components and icons.
- **@material-ui/icons**: This is used for Material-UI icons.
- **@googlemaps/react-wrapper**: This is used for integrating Google Maps into the React application.
- **React Helmet**: This is used to manage the meta tags of the pages.
- **React Notifications and React Toastify**: These are used for displaying notifications in the application.
- **Styled Components**: This is used for styling components in the application.

## Installation

To install the project, clone the repository and run `npm install` in both folders 'back' and 'front'.

Create .env file to folder 'back' and insert there values for variables `PORT` and `CONNECTION_DEV`. `PORT` is the connection port for backend
and `CONNECTION_DEV` is the URL for your database.

Here are the queries for creating the database tables:

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  password CHAR(60) NOT NULL DEFAULT 'pw',
  username VARCHAR(260) NOT NULL DEFAULT 'username'
);

CREATE TABLE enrollments(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  attending_persons text[],
  further_info_text text,
  diet text,
  other text,
  created timestamp
);

## Usage

### Backend

- `start`: Starts the application in production mode.
- `dev`: Starts the application in development mode.
- `build:ui`: Builds the frontend of the application and moves it to the back directory.
- `deploy`: Deploys the application using flyctl.
- `deploy:full`: Builds the UI and then deploys the application.
- `logs:prod`: Shows the production logs using flyctl.

### Frontend

- `start`: Starts the application in development mode.
- `build`: Builds the application for production.
