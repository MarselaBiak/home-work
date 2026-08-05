'use strict';

// задание 1

const user = {
    name: 'Alia',
    age: 21,
    email: 'alia@gmail.com',
    isSubscribed: true,
    balance: '275.84',
    verified: '0'
}

// задание 1.1, 1.2

const balance = Number(user.balance)
const verified = user.verified === '1'
let ageRestrictionMessage = ''

if (user.age < 18) {
    ageRestrictionMessage = 'Access restricted due to age'
}

// задание 1.3

function checkAccess() {
    if (user.age < 18) {
        return 'Access restricted due to age'
    }

    if (verified && (user.isSubscribed || balance > 0)) {
        return 'Access granted'
    }

    return 'Access denied'
}

const ageAsString = String(user.age)

const comparisonDoubleEquals = user.age == ageAsString
const comparisonTripleEquals = user.age === ageAsString

console.log('Числовой баланс:', balance)
console.log('Аккаунт подтверждён:', verified)
console.log('Результат доступа:', checkAccess())
console.log('Ограничение по возрасту:', ageRestrictionMessage)

console.log('Сравнение через ==:', comparisonDoubleEquals)
console.log('Сравнение через ===:', comparisonTripleEquals)

// задание 2 

const order = {
    total: '380',
    currency: 'USD',
    isPaid: true,
    delivery: 'no',
    priority: '1'
}

// задание 2.1, 2.2, 2.3, 2.4
const numberTotal = Number(order.total)
const delivery = order.delivery === 'yes'
const priority = order.priority === '1'
const isBig = numberTotal >= 1000

// задание 2.5

function description(){
    let result

    if (!order.isPaid) {
        result = 'Order is not paid'
    } else if (isBig) {
        result = 'High-value paid order'
    } else if (delivery) {
        result = 'Paid order with delivery'
    } else {
        result = 'Paid order without delivery'
    }

    if (priority) {
        result += ' [PRIORITY]'
    }

    return result
}

const totalDoubleEquals = order.total == numberTotal
const totalTripleEquals = order.total === numberTotal

console.log('Описание заказа:', description())
console.log('total == numberTotal:', totalDoubleEquals)
console.log('total === numberTotal:', totalTripleEquals)

// задание 3

const systemSettings = {
    darkMode: true,
    fontSize: '14',
    language: 'en',
    betaAccess: 'false'
}

// задание 3.1, 3.2, 3.3

const fontSize = Number(systemSettings.fontSize)
const betaAccess = systemSettings.betaAccess === 'true'
const isLargeFont = fontSize >= 18

// задание 3.4

function settings(){
    let result

    if (systemSettings.darkMode && isLargeFont) {
        result = 'Dark mode + large font'
    } else if (systemSettings.darkMode) {
        result = 'Dark mode'
    } else if (isLargeFont) {
        result = 'Large font'
    } else {
        result = 'Default settings'
    }

    if (betaAccess) {
        result += ' (Beta tester)'
    }

    return result
}

console.log(settings())

// задание 4

let userCondition = false
let orderCondition = false
let systemCondition = false
let finalAccess = false
let blockedCondition = ''

// проверка блока user
if (
    user.age >= 18 &&
    verified &&
    (user.isSubscribed || balance > 0)
) {
    userCondition = true
}

// проверка блока order
if (order.isPaid || balance >= numberTotal) {
    orderCondition = true
}

// проверка блока systemSettings
if (
    fontSize > 12 &&
    (systemSettings.language === 'en' ||
        systemSettings.language === 'uk')
) {
    systemCondition = true
}

// полный доступ
if (
    userCondition &&
    orderCondition &&
    systemCondition
) {
    finalAccess = true
}

// определяем, что заблокировало доступ
if (!userCondition) {
    blockedCondition = 'user'
} else if (!orderCondition) {
    blockedCondition = 'order'
} else if (!systemCondition) {
    blockedCondition = 'system'
}

// вывод результата
if (finalAccess) {
    console.log('Full access granted')
    console.log('Blocked condition: none')
} else {
    console.log('Access denied')
    console.log('Blocked condition:', blockedCondition)
}

