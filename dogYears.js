//holds a persons age
const myAge = 34;
//the first two years of the persons life
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//the first 2 years are deducted
let laterYears = myAge - 2;
//converting the later years in to dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//the age converted to dog years
let myAgeInDogYears = earlyYears + laterYears;
//converting name in to lower cases
let myName = "Kam Noah".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
);
