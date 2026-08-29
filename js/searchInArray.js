'use strict';

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; 

// задание 1
console.log(`Сумма положительных чисел: ${arr.reduce((acc, el) => 
    el > 0 
        ? acc + el 
        : acc, 0)}, их количество: ${arr.reduce((acc, el) => el > 0 
            ? acc + 1 
            : acc, 0)}`);

// задание 2
console.log(`Минимальный элемент массива: ${Math.min(...arr)}, его порядковый номер: ${arr.indexOf(Math.min(...arr)) + 1}`);

// задание 3
console.log(`Максимальный элемент массива: ${Math.max(...arr)}, его порядковый номер: ${arr.indexOf(Math.max(...arr)) + 1}`);

// задание 4
console.log(`Количество отрицательных элементов: ${arr.reduce((acc, el) => 
    el < 0 
        ? acc + 1 
        : acc, 0)}`);

// задание 5
console.log(`Количество положительных нечётных элементов: ${arr.reduce((acc, el) => 
    el > 0 && el % 2 !== 0 
        ? acc + 1 
        : acc, 0)}`);

// задание 6
console.log(`Количество положительных чётных элементов: ${arr.reduce((acc, el) => 
    el > 0 && el % 2 === 0 
        ? acc + 1 
        : acc, 0)}`);

// задание 7
console.log(`Сумма положительных чётных элементов: ${arr.reduce((acc, el) => 
    el > 0 && el % 2 === 0 
        ? acc + el 
        : acc, 0)}`);

// задание 8
console.log(`Сумма положительных нечётных элементов: ${arr.reduce((acc, el) => 
    el > 0 && el % 2 !== 0 
        ? acc + el 
        : acc, 0)}`);

// задание 9
console.log(`Произведение положительных элементов: ${arr.reduce((acc, el) =>
    el > 0 
        ? acc * el 
        : acc, 1)}`);

// задание 10
console.log(`Максимальный элемент: ${Math.max(...arr)}, массив с обнулёнными другими элементами: ${arr.map((el) =>
    el !==  Math.max(...arr) 
        ? 0 
        : el)}`);




