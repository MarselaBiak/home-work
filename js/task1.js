'use strict';

// задание 1

const age = prompt('введите свой возраст')

const numberAge = Number(age)

const isValidAge =
    age !== null &&
    age.trim() !== '' &&
    Number.isFinite(numberAge) &&
    Number.isInteger(numberAge)

if (!isValidAge) {
    alert('некорректный ввод')
} else {

    if (numberAge < 0) {
        alert('такого возраста не существует')
    } else if (numberAge <= 6) {
        alert('дошкольник')
    } else if (numberAge <= 17) {
        alert('несовершеннолетний')
    } else if (numberAge <= 64) {
        alert('взрослый');
    } else if (numberAge <= 120) {
        alert('пенсионер');
    } else {
        alert('вы точно не бот?')
    }

    const canDrive =
        numberAge >= 18
            ? 'может водить авто'
            : 'не может водить авто'

    const ticket =
        numberAge < 7
            ? 'билет: 0 грн'
            : numberAge <= 17 || numberAge >= 65
                ? 'билет: 50 грн'
                : 'билет: 100 грн'

    console.log(canDrive)
    console.log(ticket)
}
