# What

A backend for the wedding web app. 

## Database tables

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

## Installation

To install the project, run `npm install`.

Create .env file to and insert there values for variables `PORT` and `CONNECTION_DEV`. `PORT` is the connection port for backend
and `CONNECTION_DEV` is the URL for your database.

## Scripts

- `start`: Starts the application in production mode.
- `dev`: Starts the application in development mode.
- `build:ui`: Builds the frontend of the application and moves it to the back directory.
- `deploy`: Deploys the application using flyctl.
- `deploy:full`: Builds the UI and then deploys the application.
- `logs:prod`: Shows the production logs using flyctl.

## Notes

Instructions for serving static files:

// Path to the static React build directory
const frontend = path.join(__dirname, 'react-app/build');

// Map the requests to the static React build directory
app.use('/', express.static(frontend));

// All the unknown requests are redirected to the React SPA
app.use(function (req, res, next) {
    res.sendFile(path.join(frontend, 'index.html'));
});

https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually?page=2&tab=scoredesc#tab-top