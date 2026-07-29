'use strict';

// задание 3

function describeEmpty(value) {
    if(value === undefined){
        return 'Это undefined — JavaScript сам поставил или значение не задано'
    } else if (value === null){
        return 'Это null — разработчик осознанно сказал, что тут пусто'
    } else {
        return `Это не пустой элемент значение: ${typeof value}, ${value}`
    }
}

console.log(describeEmpty(null))
console.log(describeEmpty(undefined))
console.log(describeEmpty(0))
console.log(describeEmpty(''))
console.log(describeEmpty([]))
console.log(describeEmpty(false))

// задание 4

let userName;
let userAge;

userName = 'Anna';
userAge = 20;
console.log('name:', userName);

function getGreeting(name) {
    return `Hello, ${name}`
}

const message = getGreeting('World');
console.log('message:', message);

// добавила значение для userAge и вместо console.log сделала return 

// задание 5

const user1 = {
    name: 'Anna',
    contact: { email: 'anna@example.com' }
};

const user2 = {
    name: 'Bob'
    // у Боба немає contact взагалі
};

// Треба вивести email обох:
console.log(user1.contact?.email);   // працює: 'anna@example.com'
console.log(user2.contact?.email);   // undefined, ошибки нет
