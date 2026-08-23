'use strict';

const padString = (str, expectedLength, symbol, side) => {

    if(str === undefined){
        console.log('Отсутствует строка');
        return 'some error';
    } else if(expectedLength === undefined){
        console.log('Отсутствует ожидаемая длина');
        return 'some error';
    } else if(str.length > expectedLength){
        return str.substring(0, expectedLength);
    } else if(str.length === expectedLength){
        return str;
    } else if(symbol === undefined){
        console.log('Отсутствует символ');
        return 'some error';
    } else if(symbol.length !== 1){
        console.log('Символ может быть только один');
        return 'some error';
    } else if(side !== undefined){
        if(typeof side !== 'boolean'){
            console.log('Направление может быть только true/false');
            return 'some error';
        }
    }

    do{
        if(side || side === undefined){
            str += symbol;
        } else {
            str = symbol + str;
        }

    } while(str.length < expectedLength)

    return str;
}

console.log(padString('hello', 8, '*'))
console.log(padString('hello', 6, '*', false))
console.log(padString('hello', 2))
console.log(padString('hello', 5))
console.log(padString())
console.log(padString('hello'))
console.log(padString('hello', 8))
console.log(padString('hello', 8, '**'))
console.log(padString('hello', 8, '*', 'right'))
console.log(padString('hello', 8, '*', true))
console.log(padString('hello', 8, '*', false))
