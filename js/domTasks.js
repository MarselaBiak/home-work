'use strict';

let allElements = document.querySelectorAll('li')
let arr = []

for(const el of allElements){
    console.log(el)
    arr.push(el.textContent)
}

console.log(allElements.length)
console.log(arr)
