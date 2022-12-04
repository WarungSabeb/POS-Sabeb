const express = require('express');
const { celebrate } = require('celebrate');

const isAuth = require('../middlewares/isAuth');
const userController = require('../controllers/user');
const authValidator = require('../validators/auth');

const { Users } = require('../../../models');
const { Items } = require('../../../models');

const route = express.Router();

module.exports = (app) => {
  app.use('/auth', route);

  route.get(
    '/',
    isAuth,
    async (req, res) => res.json({
      status: 'OK',
      email: req.user.email,
    }).status(200),
  );

  route.post(
    '/register',
    celebrate(authValidator.register),
    async (req, res, next) => {
      try {
      // TODO: Check useris already registered
        const existingUser = await userController.findByEmail(req.body.email);
        if (existingUser) {
          res.redirect('/Sign-up-fail');
        }

        if (!existingUser) {
          // TODO: register user
          await userController.createUser(
            req.body.email,
            req.body.full_name,
            req.body.phone,
            req.body.password,
          );
          res.redirect('/Login');
        }
      } catch (err) {
        return next(err);
      }
    },
  );

  route.post(
    '/login',
    celebrate(authValidator.login),
    async (req, res, next) => {
      try {
        const user = await userController.login(
          req.body.email,
          req.body.password,
        );

        if (!user) {
          res.redirect('/Login-fail');
        }

        if (user) {
          res.redirect('/Product');
        }
      } catch (err) {
        return next(err);
      }
    },
  );

  route.post(
    '/item',
    async (req, res, next) => {
      try {
        await userController.createItem(
          req.body.item_name,
          req.body.item_image,
          req.body.item_price,
          req.body.item_stock,
        );
        res.redirect('/add');
      } catch (err) {
        return next(err);
      }
    },
  );
};
