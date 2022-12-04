process.env.Node_ENV = (process.env.Node_ENV || 'development').toLowerCase();

const dotenv = require('dotenv');

const envFound = dotenv.config({ path: './config/.env' });
if (envFound.error) {
  throw new Error('File.env not found.');
}

module.exports = {
  port: process.env.PORT || 5000,

  jwtSecretKey: process.env.JWT_SECRET_KEY || '',
};
