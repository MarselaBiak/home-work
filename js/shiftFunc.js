'use strict';

// задание 1

const shiftFunc = (arr) => {
    if(arr.length === 0){
        return undefined;
    }

    const removedElement = arr[0];

    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1];
    }

    arr.length--;

    return removedElement;
}

const arr1 = [1, 2, 3, 4];
console.log(shiftFunc(arr1));
console.log(arr1);

const arr2 = ['a', 'b', 'c'];
console.log(shiftFunc(arr2));
console.log(arr2);

const arr3 = [10];
console.log(shiftFunc(arr3));
console.log(arr3);

const arr4 = [];
console.log(shiftFunc(arr4));
console.log(arr4);
