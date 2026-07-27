'use strict';

// 4.1

const singleQuotes = 'Hello';
const doubleQuotes = "Hello";
const backticks = `Hello`;

console.log('Одинарные кавычки:', singleQuotes);
console.log('Двойные кавычки:', doubleQuotes);
console.log('Обратные кавычки:', backticks);

// 4.2

const textWithEscaping = 'Он сказал: "Это — \'обычная\' ошибка".';

console.log('Через экранирование:', textWithEscaping);

const textWithBackticks = `Он сказал: "Это — 'обычная' ошибка".`;

console.log('Через шаблонную строку:', textWithBackticks);

// через обратные кавычки писать удобнее

// 4.3

const name = 'Marsela'
let age = 19
let city = 'Sofia'
const string = `Hi! My name is ${name}, I am ${age} years old, I live in ${city}. My age in months is ${age * 12}.`;

console.log(string)

// 4.4

console.log('длина строки: ', string.length)
console.log('первый символ : ', string[0])
console.log('пятый символ : ', string[4])
console.log('последний символ : ', string[string.length - 1])

// 4.5

/*
* const greeting = 'Hello';
* greeting[0] = 'M';
*console.log(greeting);
*/

/* строки нельзя так менять 
* Uncaught TypeError: Cannot assign to read only property
* '0' of string 'Hello'
*at string.js:32:13 (anonymous) @ string.js:32
*/

