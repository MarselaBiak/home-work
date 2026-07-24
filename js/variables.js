"use strict";

let name = 'Marsela' // имя можно поменять
let surname = 'Biiak' // фамилтю можно поменять
let age = 19 // меняется с каждым годом
let home = 'Sofia' // можно переехать
let hobby = 'snowboarding' // меняется с возрастом
const birthYear = 2006 // не могу вернуть время назад
let color = 'red' // тоже меняется с возрастом

console.log(name)
console.log(surname)
console.log(age)
console.log(home)
console.log(hobby)
console.log(birthYear)
console.log(color)

// изменение возраста let
console.log(`Возраст до: ${age}`)
age++
console.log('Возраст пссле: ' + age)
age--

/* изменение года рождения const 
* birthYear = 2000
* помилка: 
* Uncaught TypeError: Assignment to constant variable. 
* at variables.js:25:12
*/

/* повторная инициализация 
* let name = 'Marselin'
* Uncaught SyntaxError: Identifier 'name' has already been declared 
* (at variables.js:32:5)
*/

console.log(`Hi! My name is ${name} ${surname}, ${age}, i live in ${home}`)




