'use strict';

// задание 1
console.log('вывод чисел от 20 до 30')
for(let i = 20; i <= 30; i+=0.5){
    console.log(i)
}

// задание 2

let dollar = 10

while (dollar <= 100) {
    console.log(`в долларах: ${dollar}, в гривнах: ${dollar * 27}`)
    dollar += 10
}

// задание 3

let n = Number(prompt('Введите целое число'))

if (Number.isInteger(n)){
    for(let i = 1; i <= 100 && i ** 2 <= n; i++){
        console.log(i)
    }
} else {
    alert('неправильный ввод')
}

// задание 4

if (Number.isInteger(n)) {
    let isSimple = n > 1

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isSimple = false
            break
        }
    }

    alert(
    isSimple
        ? `число ${n} простое`
        : `число ${n} не простое`
    )

}

// задание 5

if (Number.isInteger(n)) {
    let isEqual = false

    for (let i = 3; i <= n; i *= 3) {
        if (i === n) {
            isEqual = true
            break
        }
    }

    alert(
        isEqual
            ? `число ${n} можно получить возведением 3 в степень`
            : `число ${n} нельзя получить возведением 3 в степень`
    )
}


