const mongoose = require('mongoose');

const Users = require('./user');
const Items = require('./item');

mongoose.connect(
  'mongodb+srv://Mikael:Yalokin@cluster0.5ix4rku.mongodb.net/test',
);

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB server');
});

module.exports = {
  db,
  Users,
  Items,
};
