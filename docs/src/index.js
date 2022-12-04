const express = require('express');
const ejs = require('ejs');

const route = express.Router();

const { celebrate } = require('celebrate');

const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const authValidator = require('./api/v1/validators/auth');
const userController = require('./api/v1/controllers/user');
const isAuth = require('./api/v1/middlewares/isAuth');

const config = require('./core/config');
const app = require('./core/server');

const { Items } = require('./models');

const initializePassport = require('./passport-config');

const users = [];

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id),
);

// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log(`Server runs at port ${config.port}`);
  }
});

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/hubungi-kami', async (req, res) => {
  res.render('pages/hubungi-kami');
});

app.get('/index', async (req, res) => {
  res.render('pages/index');
});

app.get('/LupaPassword', async (req, res) => {
  res.render('pages/LupaPassword');
});

app.get('/Partner', async (req, res) => {
  res.render('pages/Partner');
});

app.get('/POS', async (req, res) => {
  res.render('pages/POS');
});

app.get('/Subs', async (req, res) => {
  res.render('pages/Subs');
});

app.get('/tentang-kami', async (req, res) => {
  res.render('pages/tentang-kami');
});

app.get('/Login', async (req, res) => {
  res.render('pages/Login');
});

app.get('/Login-fail', async (req, res) => {
  res.render('pages/Login-fail');
});

app.get('/Sign-up', async (req, res) => {
  res.render('pages/Sign-up');
});

app.get('/Sign-up-fail', async (req, res) => {
  res.render('pages/Sign-up-fail');
});

app.get('/Logout', async (req, res) => {
  res.render('pages/Logout');
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/Product');
  }
  next();
}

app.get('/accountSetting', checkAuthenticated, async (req, res) => {
  res.render('pages/accountSetting', {
    name: req.user.name,
  });
});

app.get('/Product', checkAuthenticated, async (req, res) => {
  Items.find({}, (err, items) => {
    res.render('pages/Product', {
      itemsList: items,
      name: req.user.name,
    });
  });
});

app.get('/add', checkAuthenticated, async (req, res) => {
  res.render('pages/add', {
    name: req.user.name,
  });
});

app.get('/userPOS', checkAuthenticated, async (req, res) => {
  Items.find({}, (err, items) => {
    res.render('pages/userPOS', {
      itemsList: items,
    });
  });
});

app.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/Logout');
  });
});

app.post('/Sign-up', checkNotAuthenticated, async (req, res, next) => {
  try {
    const existingUser = await userController.findByEmail(req.body.email);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    if (existingUser) {
      res.redirect('/Sign-up-fail');
    }

    if (!existingUser) {
      await userController.createUser(
        req.body.email,
        req.body.full_name,
        req.body.phone,
        req.body.password,
      );

      users.push({
        id: Date.now().toString(),
        name: req.body.full_name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword,
      });

      res.redirect('/Login');
    }
  } catch (err) {
    return next(err);
  }
});

app.post('/Login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/Product',
  failureRedirect: '/Login-fail',
  failureFlash: true,
}));

app.post(
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
