export function getDate() {
  let today = new Date();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };

  return today.toLocaleDateString('en-US', options);
}

export function getDay() {
  let currentDay = today.getDate();

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

  return currentDay;
}
