Database table create queries:

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