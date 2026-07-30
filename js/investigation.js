'use strict';

// задание 1

const hasPromoCode = true
const cartTotal = 5000
const isBlackFriday = false

const isDiscountApplied =   (cartTotal >= 100 && hasPromoCode) || isBlackFriday

if (isDiscountApplied){
    console.log('Скидка применена')
} else {
    console.log('Скидка не применена')
}

const noDiscount = !isDiscountApplied

// задание 2

const email = 'marselabiak@gmail.com'
const password = 'qwerty12345'
const isEmailVerified = false

const canLogin =   email !== '' && password !== '' && isEmailVerified === true

if (canLogin) {
    console.log('Логин успешный');
} else {
    console.log('Проверьте данные');
}
