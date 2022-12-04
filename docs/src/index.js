const express = require('express');
const ejs = require('ejs');

const router = express.Router();

const config = require('./core/config');
const app = require('./core/server');

const { Items } = require('./models');
// D:\Netflix\UNTAR\SEM 3\Web Programming\Test\src\models
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');

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

app.get('/admin', async (req, res) => {
  res.render('pages/admin');
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

app.get('/Sign-up', async (req, res) => {
  res.render('pages/Sign-up');
});

app.get('/Logout', async (req, res) => {
  res.render('pages/Logout');
});

app.get('/accountSetting', async (req, res) => {
  res.render('pages/accountSetting');
});

app.get('/Product', async (req, res) => {
  // res.render('pages/Product');
  Items.find({}, (err, items) => {
    res.render('pages/Product', {
      itemsList: items,
    });
  });
});

// app.get('/get', async (req, res) => {
//   // res.render('pages/Product');
//   Items.find({}, (err, items) => {
//     res.send({
//       itemsList: items,
//     });
//   });
// });

// app.get('/get', async (req, res) => {
//   // res.render('pages/Product');
//   // Items.find({}, (err, items) => {
//   res.send({
//     data: [
//       { id: 5, name: 'Bill' },
//       { id: 1, name: 'Bob' }],
//   });
//   // });
// });

app.get('/set', async (req, res) => {
  res.render('pages/set');
});

app.get('/userPOS', async (req, res) => {
  // res.render('pages/userPOS');
  Items.find({}, (err, items) => {
    res.render('pages/userPOS', {
      itemsList: items,
    });
  });
});
