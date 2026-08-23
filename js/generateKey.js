'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = (length, characters) => {
    let str = '';
    for(let i = 0; i < length; i++){
        str += characters[Math.floor(Math.random() * characters.length)];
    }
    return str;
}

console.log(generateKey(16, characters));
