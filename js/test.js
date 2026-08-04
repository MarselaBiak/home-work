'use strict';

// Задание 2

console.log(describe(42));
// Тип: number, Значение: 42

console.log(describe('hello'));
// Тип: string, Значение: hello, Длина: 5

console.log(describe(true));
// Тип: boolean, Значение: true

console.log(describe(undefined));
// Тип: undefined, Значение: undefined


// Задание 3

console.log(describe(null));
// Тип: null, Значение: null

console.log(describe([1, 2, 3]));
// Тип: array

console.log(describe(NaN));
// Тип: NaN, Значение: NaN

console.log(describe({ a: 1 }));
// Тип: object


// Задание 4

console.log(describe('hello'));
// Тип: string, Значение: hello, Длина: 5

console.log(describe([1, 2, 3]));
// Тип: array, Количество элементов: 3

console.log(describe({
    name: 'Anna',
    age: 25
}));
// Тип: object, Ключи: name, age

console.log(describe(function (a, b, c) {
    return a + b + c;
}));
// Тип: function, Значение: <function>, Аргументов: 3


// Задание 5

console.log(describe(100n));
// Тип: bigint, Значение: 100n

console.log(describe(Symbol('user-id')));
// Тип: symbol, Значение: user-id

console.log(describe(Symbol()));
// Тип: symbol, Значение: без описания


// Задание 6

const testValues = [
    42,
    0.1 + 0.2,
    100n,
    'hello',
    '',
    true,
    false,
    null,
    undefined,
    NaN,
    Infinity,
    [1, 2, 3],
    [],
    {
        name: 'Anna',
        age: 25
    },
    {},
    Symbol('id'),
    function greet(name) {
        return `Hi, ${name}`;
    },
    () => 'arrow'
];

for (let i = 0; i < testValues.length; i++) {
    console.log(describe(testValues[i]));
}


// Задание 7

console.log(describe({
    name: 'Anna',
    hobbies: ['sewing', 'F1'],
    age: 25
}));