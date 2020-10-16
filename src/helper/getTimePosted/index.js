function getTimePosted(currentDate) {
  let differenceDate = getDateDifference(currentDate);
  return dateConverter(differenceDate);
}

function getDateDifference(currentDate) {
  let pastDate = new Date(currentDate.toString());
  let differenceDate = new Date().getTime() - pastDate.getTime();

  return new Date(differenceDate);
}

function dateConverter(date) {
  let month = date.getMonth();
  let days = date.getDate();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (month) {
    return month + "mo";
  }
  
  if (days) {
    return days + "d";
  }

  if (hours) {
    return hours + "h";
  }

  if (min) {
    return min + "min";
  }

  if (sec) {
    return sec + "s";
  }
  
  return;
}

export {getTimePosted}