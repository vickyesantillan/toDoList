const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  var today = new Date();
  var currentDay = today.getDate();
  var day = '';

  switch (currentDay) {
    case 0:
      day = 'Monday';
      break;
    case 1:
      day = 'Tuesday';
      break;
    case 2:
      day = 'Wednesday';
      break;
    case 3:
      day = 'Thursday';
      break;
    case 4:
      day = 'Friday';
      break;
    case 5:
      day: 'Saturday';
      break;
    case 6:
      day = 'Sunday';
      break;

    default:
      console.log('Error: current day is equal to: ' + currentDay);
      break;
  }
  res.render('list', { kindOfDay: day });
});

app.listen(3000, function () {
  console.log('Port 3000 working');
});
