const jwt = require('jsonwebtoken');

const config = require('../../../core/config');
const { Users } = require('../../../models');
const { Items } = require('../../../models');
const { hashPassword, comparePassword } = require('../../../helpers/crypto');

async function createUser(email, fullName, phone, password) {
  const hashedPassword = await hashPassword(password);
  const newUser = new Users({
    email,
    full_name: fullName,
    phone,
    password: hashedPassword,
  });

  return newUser.save();
}

async function createItem(name, image, price, stock) {
  const newItem = new Items({
    item_name: name,
    item_image: image,
    item_price: price,
    item_stock: stock,
  });

  return newItem.save();
}

async function updateUser(email, fullName, phone, password) {
  const hashedPassword = await hashPassword(password);
  const newUser = new Users({
    email,
    full_name: fullName,
    phone,
    password: hashedPassword,
  });

  return newUser.save();
}

async function findByEmail(email) {
  return Users.findOne({ email }).exec();
}

async function login(email, password) {
  const user = await findByEmail(email);
  if (!user) {
    return null;
  }

  const passwordMatched = await comparePassword(
    password,
    user.password,
  );

  return passwordMatched ? user : null;
}

async function generateToken(id) {
  const payload = { id };
  return jwt.sign(payload, config.jwtSecretKey);
}

async function findById(id) {
  return Users.findById(id);
}

module.exports = {
  createUser,
  updateUser,
  createItem,
  findByEmail,
  login,
  generateToken,
  findById,
};
