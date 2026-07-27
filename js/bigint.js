'use strict';

// 3.1

const firstBigInt = 10n;
const secondBigInt = BigInt(20);

console.log('BigInt через n:', firstBigInt);
console.log('Тип первого BigInt:', typeof firstBigInt);

console.log('BigInt через BigInt():', secondBigInt);
console.log('тип второго BigInt:', typeof secondBigInt);

// 3.2 

const maxSafeBigInt = BigInt(Number.MAX_SAFE_INTEGER);

console.log('MAX_SAFE_INTEGER как BigInt:', maxSafeBigInt);
console.log('MAX_SAFE_INTEGER + 1n:', maxSafeBigInt + 1n);
console.log('MAX_SAFE_INTEGER + 2n:', maxSafeBigInt + 2n);
console.log('MAX_SAFE_INTEGER + 3n:', maxSafeBigInt + 3n);
console.log('MAX_SAFE_INTEGER + 4n:', maxSafeBigInt + 4n);
console.log('MAX_SAFE_INTEGER + 5n:', maxSafeBigInt + 5n);

// в BigInt все соседние числа остаются разными
// BigInt хранит большие целые числа без потери точности

// 3.3

const a = 10n;
const b = 10;

console.log('a === b:', a === b);
console.log('a == b:', a == b);
console.log('typeof a:', typeof a);
console.log('typeof b:', typeof b);

// a === b даёт false, потому что типы разные 
// a == b даёт true, потому что значения одинаковые

// 3.4 

//console.log(10n + 5);

/* bigint.js:43 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
*    at bigint.js:43:18 
*/
