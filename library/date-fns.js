// npm init
// npm install date-fns

const add = require('date-fns/add')

const parseISO = require('date-fns/parseISO')

console.log(add(parseISO(birthday), { days: 1000}))