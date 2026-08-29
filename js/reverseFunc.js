'use strict';

// задание 2

const reverseFunc = (arr) => {
    let k = arr.length - 1;

    for(let i = 0; i < Math.floor(arr.length / 2); i++){
        const storage = arr[i]
        arr[i] = arr[k]
        arr[k] = storage 
        k--;
    }

    return arr;
}

console.log(reverseFunc([1, 2, 3, 4]))
console.log(reverseFunc(['a', 'b', 'c']))
console.log(reverseFunc([10]))
console.log(reverseFunc([]))
console.log(reverseFunc([true, false, null]))
