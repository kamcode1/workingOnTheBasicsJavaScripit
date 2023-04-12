let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
const age = 17;
if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly === true) {
  console.log(`You \'ll be racing at 9:30am & Race # : ${raceNumber}`);
} else if (age > 18 && registeredEarly === false) {
  console.log(`Late adults run at 11:00 am Race # : ${raceNumber}`);
} else if (age < 18) {
  console.log(`Youth registrants run at   12:30 pm Race # : ${raceNumber}`);
} else {
  console.log(
    "Runners 18 years of age please visit the registration desk immidiately!"
  );
}
