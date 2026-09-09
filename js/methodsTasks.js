'use strict';

// задание 1

const products = [
    { id: 1, name: "Mouse", price: 25, inStock: true },
    { id: 2, name: "Keyboard", price: 70, inStock: false },
    { id: 3, name: "Monitor", price: 210, inStock: true },
];

console.log(products);

const result =  products.map(el  => `${el.name}: $${el.price}${el.inStock ? '' : ' (out of stock)'}`)

console.log(result);

// задание 2

const users = [
    { id:  1, age: 17, active: true, email: "a@mail.com" },
    { id: 2, age: 22, active: true, email: "b@spam.com" },
    { id: 3, age: 30, active: false, email: "c@mail.com" },
    { id: 4, age: 35, active: true, email: "d@mail.com" },
    { id: 5, age: 40, active: true, email: "e@mail.com" },
];

console.log(users);

const result2 = users.filter(el => el.active === true && (el.age >= 18 && el.age <= 35) && !el.email.endsWith('@spam.com'))

console.log(result2);

// задание 3

const tx = [
    { id: 1, category: "food", amount: 12 },
    { id: 2, category: "food", amount: 8 },
    { id: 3, category: "taxi", amount: 15 },
    { id: 4, category: "books", amount: 20 },
    { id: 5, category: "taxi", amount: 7 },
];

console.log(tx);

const result3 = tx.reduce((acc, el) => {
    acc[el.category] = (acc[el.category] || 0) + el.amount;
    return acc;
}, {});

console.log(result3);

// задание 4

const orders = [
    { id: 101, items: [{ sku: "A1", qty: 1 }, { sku: "C3", qty: 2 }] },
    { id: 102, items: [{ sku: "B2", qty: 1 }] },
    { id: 103, items: [{ sku: "B2", qty: 3 }, { sku: "A1", qty: 1 }] },
];

const result4 = orders.find(el => el.items.some(item => item.sku === "B2"));

console.log(result4);





