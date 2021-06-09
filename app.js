const express = require('express');
const app = express();

const date = require(__dirname + '/date.js');

let items = ['Buy food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  let day = date.getDate();

  res.render('list', { listTitle: day, newItem: items });
});

app.post('/', function (req, res) {
  let item = req.body.item;

  if (req.body.list === 'Work List') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', function (req, res) {
  res.render('list', { listTitle: 'Work List', newItem: workItems });
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.post('/work', function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect('work');
});

app.listen(3000, function () {
  console.log('Port 3000 working');
});
