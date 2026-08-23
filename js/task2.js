'use strict';

// задание 2.1
const seconds = prompt('Введіть число');
const secondsNum = Number(seconds) ;

if (
    seconds === null ||
    seconds.trim() === "" ||
    Number.isNaN(secondsNum) ||
    !Number.isInteger(secondsNum) ||
    secondsNum < 0
) {
    alert("Некоректний ввід");
} else {
    const hours = String(Math.floor(secondsNum / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((secondsNum % 3600) / 60)).padStart(2, '0');
    const secs = String(secondsNum % 60).padStart(2, '0');

    alert(`${secondsNum} → ${hours}:${minutes}:${secs}`);
}

// задание 2.2

const input = prompt('Введіть ціле позитивне число');
const number = Number(input);

if (
    input === null ||
    input.trim() === "" ||
    Number.isNaN(number) ||
    !Number.isInteger(number) ||
    number <= 0
) {
    alert("Некоректний ввід");
} else {
    let currentNumber = number;
    let digitSum = 0;
    let firstSum;
    let chain = `${number}`;

    do {
        digitSum = 0;
        let tempNumber = currentNumber;

        while (tempNumber > 0) {
            digitSum += tempNumber % 10;
            tempNumber = Math.floor(tempNumber / 10);
        }

        if (firstSum === undefined) {
            firstSum = digitSum;
        }

        chain += ` → ${digitSum}`;

        currentNumber = digitSum;

    } while (currentNumber > 9)

    console.log(chain);
    console.log(`${number} → сума : ${firstSum}, цифровой корінь: ${currentNumber}`);
}

// задание 2.3

const price = prompt("Введіть ціну у гривнях");
const nominals = [500, 200, 100, 50, 20, 10, 5, 2, 1];

let priceNum = Number(price); 
let count = 0;
let totalCount = 0;
let result = '';

if (
    price === null ||
    price.trim() === "" ||
    Number.isNaN(priceNum) ||
    !Number.isInteger(priceNum) ||
    priceNum <= 0
) {
    alert("Некоректний ввід");
} else {
        for(const num of nominals){
            count = Math.floor(priceNum / num);

            if (count === 0) {
                continue;
            }

            if (result !== '') {
                result += ', ';
            }

            result += `${num} x ${count}`;
            
            totalCount += count;
            priceNum = priceNum % num;

                if (priceNum === 0) {
                    break;
                }
        }
    console.log(result);
    console.log(`Загальна кількість: ${totalCount}`);
}




