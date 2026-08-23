'use strict';

// задание 1.2

let guessedCorrectly = false;
let counter = 0;

const randomNumber = Math.floor(Math.random() * 10) + 1;

do {
    const userGuess = prompt("Вгадай число від 1 до 10:");
    const userGuessNum = parseInt(userGuess, 10);
    if(userGuess === null){                                     // нажал сancel
        alert("Гру завершено");
        break;
    } else if(userGuess.trim() === ''){                         // OK с пустым полем или ввёл пробелы
        alert("Ви нічого не ввели");
        continue;
    } else if(Number.isNaN(userGuessNum)){                      // ввёл текст 
        alert('Це не число');
        continue;
    } else if(!Number.isInteger(Number(userGuess))){                 // ввёл дробное число
        alert("Введіть ціле число");
        continue;
    } else if(userGuessNum < 1 || userGuessNum > 10){           // ввёл число в неправильном диапозоне
        counter++
        alert("Число має бути від 1 до 10");
        if(counter >= 5){                                       // закончились попытки
            alert(`На жаль, це було число ${randomNumber}`);
            break;
        }
        continue;
    } else if (userGuessNum === randomNumber) {                  // угадал
        counter++
        alert(`Вітаю! Ви вгадали число з ${counter} спроби!`);
        guessedCorrectly = true;
    } else {                                                     // не угадал
        counter++;
        if(counter >= 5){                                        // закончились попытки
            alert(`На жаль, це було число ${randomNumber}`);
            break;
        }
        alert(`Не те число! Спробуй число ${userGuessNum >  randomNumber ?
            'менше' :
            'більше'}. У вас залишилось ${5 - counter} спроб`);
    }
} while (!guessedCorrectly);

// задание 1.3

// задание 1.3

/*
const userGuessNum = Number(userGuess)

if (Number.isNaN(userGuessNum)) {
    alert('це не число')
} else if (!Number.isInteger(userGuessNum)) {
    alert('введіть ціле число')
}
*/
