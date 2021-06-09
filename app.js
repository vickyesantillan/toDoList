const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const multer = require('multer'); // v1.0.5
// const upload = multer();
let items = ['Buy food', 'Cook Food', 'Eat Food'];
let workItems = [];

app.set('view engine', 'ejs');
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  let today = new Date();
  let currentDay = today.getDate();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  let day = today.toLocaleDateString('en-US', options);

  // switch (currentDay) {
  //   case 0:
  //     day = 'Monday';
  //     break;
  //   case 1:
  //     day = 'Tuesday';
  //     break;
  //   case 2:
  //     day = 'Wednesday';
  //     break;
  //   case 3:
  //     day = 'Thursday';
  //     break;
  //   case 4:
  //     day = 'Friday';
  //     break;
  //   case 5:
  //     day: 'Saturday';
  //     break;
  //   case 6:
  //     day = 'Sunday';
  //     break;

  //   default:
  //     console.log('Error: current day is equal to: ' + currentDay);
  //     break;
  // }

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
