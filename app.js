const express = require('express');
const app = express();
var chores = ['Buy food', 'Cook Food', 'Eat Food'];

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  var today = new Date();
  var currentDay = today.getDate();

  var options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  var day = today.toLocaleDateString('en-US', options);

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

  res.render('list', { kindOfDay: day, newChore: chores });
});

app.post('/', function (req, res) {
  var chore = req.body.chore;
  chores.push(chore);
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Port 3000 working');
});
