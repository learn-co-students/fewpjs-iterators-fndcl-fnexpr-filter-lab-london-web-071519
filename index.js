// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
// const stri = 'Sa';

const findMatching = (arr, str) => arr.filter((driver) => driver.toLowerCase() === str.toLowerCase());
const fuzzyMatch = (arr, str) => arr.filter((driver) => driver.slice(0, str.length) === str);
const matchName = (arr, str) => arr.filter((driver) => driver.name === str);
