'use strict';

const input = document.querySelector('input')
const div = document.querySelector('div')

input.addEventListener('focus', function () {
    div.style.display = 'flex'
}) 
    
input.addEventListener('blur', function () {
    div.style.display = 'none'
}) 

