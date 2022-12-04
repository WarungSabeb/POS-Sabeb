const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const { errors } = require('celebrate');

const routesV1 = require('../api/v1');

const app = express();

// Handles if tou're behind a reverse proxy
app.enable('trust proxy');

// Handles cross origin resource sharing {CORS}
app.use(cors());

// Enables passport for API authorization
app.use(passport.initialize());

// Lets you use HTTP verbs such as PUT or DELETE when the client doesn't support it
app.use(require('method-override')());

// Transforms raw string to JSON
app.use(bodyParser.json());

// Enable file uploads via multipart/form-data
app.use(bodyParser.urlencoded({ extended: false }));

// Load API routes
app.use('/api', routesV1());

// Error handling
// Enable error logging to stderr
app.use((err, req, res, next) => {
  console.error(err.stack);
  next(err);
});

// Error handlers for validation using celebrate
app.use(errors());

// Catch all other errors
app.use((err, req, res, next) => {
  if (err.status === 401) {
    return res.status(err.status)
      .send({
        statusCode: 401,
        error: 'Unauthorized access',
        message: err.message,
      })
      .end();
  }

  return res.status(err.status || 500)
    .send({
      statusCode: err.status || 500,
      error: 'Internal server erorr',
      message: err.message,
    })
    .end();
});

module.exports = app;
