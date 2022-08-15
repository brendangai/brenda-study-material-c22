// npm init
// npm install readline-Sync



const readlineSync = require('readline-sync')

const birthday = readlineSync.question('What is your birthday?')


// the use of keyInSelect
const favouriteColor = readlineSync.keyInSelect(color, 'What is your favourite color?')