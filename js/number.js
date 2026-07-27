'use strict';

// 2.1
console.log('целое положительное: ', 5);
console.log('целое отрицательное: ', -5);
console.log('число с плавающей запятой: ', 6.878);
console.log('очень большое число: ', 1e12);
console.log('очень маленькое число: ', 1e-12);
console.log('большое число с разделителем _: ', 4_000_000);

// 2.2
console.log('бесконечность: ', 5/0);
console.log('-бесконечность: ', -5/0);
console.log('нан: ', 'привет' /6);

//2.3
console.log('0.1 + 0.2:', 0.1 + 0.2);
// ждали: 0.3
//получили: 0.30000000000000004


//2.4
console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);

console.log('MAX_SAFE_INTEGER + 1:', Number.MAX_SAFE_INTEGER + 1);
console.log('MAX_SAFE_INTEGER + 2:', Number.MAX_SAFE_INTEGER + 2);
console.log('MAX_SAFE_INTEGER + 3:', Number.MAX_SAFE_INTEGER + 3);
console.log('MAX_SAFE_INTEGER + 4:', Number.MAX_SAFE_INTEGER + 4);
console.log('MAX_SAFE_INTEGER + 5:', Number.MAX_SAFE_INTEGER + 5);

//после максимального безопасного числа некоторые числа становятся одинаковыми


// 2.5. NaN — вірус

console.log('NaN + 5:', NaN + 5);
console.log('NaN - 5:', NaN - 5);
console.log('NaN * 5:', NaN * 5);
console.log('NaN / 5:', NaN / 5);

//во всех случаях нан 
