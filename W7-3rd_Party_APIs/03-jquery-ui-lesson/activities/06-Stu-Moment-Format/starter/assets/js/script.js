// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
// gradDate = moment("Jan 1st, 1999", "MMM Do, YYYY").format();
// $("#1a").text(gradDate);

var gradDate = moment("Jan 1st, 1999", "MMM Do, YYYY").format("MMM Do, YYYY");
$("#1a").text(gradDate);
// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("1/1/2022", "MM/DD/YYYY").format("dddd");
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
now = moment().format("DDD");
$("#3a").text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
time = moment().format("HH:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
unix = moment().format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
unixFormat = moment.unix(1318781876).format();
$("#6a").text(unixFormat);
