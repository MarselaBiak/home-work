"use strict";

const userName = prompt('Your name?')
let userNameFixed = userName[0].toUpperCase() + userName.slice(1).toLowerCase();

alert(`Hello, ${userNameFixed}! How are you?`)

greet.textContent = `Hello, ${userNameFixed}!`