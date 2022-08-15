// how to install and apply
// ==============================================
const fs = require('fs')
const readLineSync = requre('readline-sync')

// write file
fs.writeFileSync('014-demo.txt', 'Hello World')

// read file
const data = fs.readFileSync('014-demo.txt', 'utf8')
console.log(data)




//攞出嚟改, 改左, write番入file度
//==============================================
let i = fs.readFileSync('014-count.txt', 'utf8');
i++;
console.log('You have run this program the ' + i + ' times.')
fs.writeFileSync('014-count.txt, i')




// 想save多幾種record, 除了用variable, 可用分行格式:
// ==============================================
const fs = require('fs')
const readLineSync = requre('readline-sync')

// the ans is typeOf string:
const name = readLineSync.question('what is the student name?')
const existingStudents = fs.readFileSync('014-students.txt', 'utf8')
fs.writeFileSync('014-student.txt', existingStudents + "\n" + name)

// *******in order to delete record, 
// *******we need to change the format from string to array"
const fs = require('fs')
const readLineSync = requre('readline-sync')

const existingStudents = fs.readFileSync('014-students.txt', 'utf8')
const existingStudentArray = (existingStudents.split("\n"))
existingStudentArray.splice(1, 1)
fs.writeFileSync('014-students.txt', existingStudentArray.join("\n"))

