const express = require('express');

const router = express.Router();

const app = express();

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
  res.render('pages/Product');
});

app.get('/set', async (req, res) => {
  res.render('pages/set');
});

app.get('/userPOS', async (req, res) => {
  res.render('pages/userPOS');
});

module.exports = router;
