'use strict';

// задание 2

const clubMember1 = {
    id: Symbol('member'),
    name: 'John',
    joinDate: '2024-01-12'

}

const clubMember2 = {
    id: Symbol('member'),
    name: 'Ann',
    joinDate: '2020-04-22'

}

const clubMember3 = {
    id: Symbol('member'),
    name: 'Julia',
    joinDate: '2022-10-05'

}

console.log(clubMember1);
console.log(clubMember2);
console.log(clubMember3);

// задание 3

const twin1 = {
    id: Symbol('twin'),
    name: 'Marpha',
    joinDate: '2024-01-15'
};

const twin2 = {
    id: Symbol('twin'),
    name: 'Marpha',
    joinDate: '2024-01-15'
};

console.log(twin1 === twin2);
console.log(twin1.id === twin2.id);
console.log(twin1.name === twin2.name);
console.log(twin1.id.description === twin2.id.description);

/* twin1 и twin2 разные объекты, поэтому их ссылки не равны
* каждый вызов Symbol('twin') создаёт новый уникальный Symbol, поэтому id также не равны
* поля name равны, потому что строки сравниваются по значению
* description равны, потому что оба Symbol имеют описание 'twin'
*/

// задание 4.1

const s1 = Symbol('secret');
const s2 = Symbol(s1.description);
console.log(s1 === s2);   // false, s1.description возвращает строку 'secret', но Symbol('secret') каждый раз создаёт новый уникальный символ

// задание 4.2
const s3 = Symbol('id');
const s4 = Symbol('id');
console.log(s3 == s4); // false, одинаковое описание не делает Symbol одинаковыми

// задание 4.3

const s = Symbol('id');
//alert(s);         // alert(s) вызывает ошибку, потому что Symbol нельзя автоматически преобразовать в строку
alert(String(s)); // String(s) и s.toString() явно преобразуют Symbol в строку
alert(s.toString()); 
alert(s.description); // s.description возвращает только текстовое описание символа

// задание 4.4
const uniqueKey = Symbol('meta');
const data = {
    publicName: 'Alice',
    [uniqueKey]: 'секретна інформація'
};

console.log(data);
console.log(data[uniqueKey]);
console.log(data.uniqueKey);   
console.log(Object.keys(data));

/* Symbol используется как уникальный ключ объекта.
* Получить значение можно только через data[uniqueKey].
* Запись data.uniqueKey ищет обычный строковый ключ и возвращает undefined.
* Object.keys(data) не показывает Symbol-ключи.
* Это удобно для хранения служебных данных и предотвращения конфликтов имён,
* но Symbol не делает данные полностью секретными.
*/

// задание 5

const club = [
    {
        id: Symbol('member'),
        name: 'Марфа'
    },
    {
        id: Symbol('member'),
        name: 'Анна'
    },
    {
        id: Symbol('member'),
        name: 'Иван'
    },
    {
        id: Symbol('member'),
        name: 'Олег'
    },
    {
        id: Symbol('member'),
        name: 'Мария'
    }
];

function findMember(memberSymbol) {
    const member = club.find(function (participant) {
        return participant.id === memberSymbol;
    });

    if (member) {
        return member;
    } else {
        return 'Member not found';
    }
}

console.log(findMember(club[0].id));
console.log(findMember(Symbol('member')));

// задание 6

const a = Symbol('shared');
const b = Symbol('shared');

console.log(a === b); // false

const c = Symbol.for('shared');
const d = Symbol.for('shared');

console.log(c === d); // true

/* Symbol() каждый раз создаёт новый уникальный символ, поэтому a и b не равны, даже если у них одинаковое описание
* Symbol.for() ищет Symbol по ключу в глобальном реестре, если Symbol с таким ключом уже существует, возвращается тот же Symbol, поэтому c и d равны
* Symbol.for() удобно использовать, когда разные части программы должны обращаться к одному общему Symbol
*/

