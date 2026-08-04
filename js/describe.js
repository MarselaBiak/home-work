'use strict';

function describe(value, level = 0) {
    const indent = '    '.repeat(level);
    const nextIndent = '    '.repeat(level + 1);

    if (value === null) {
        return `${indent}Тип: null, Значение: null`;

    } else if (Array.isArray(value)) {
        if (value.length === 0) {
            return `${indent}Тип: array, Значение: [], Количество элементов: 0`;
        }

        let result = `${indent}Тип: array, Количество элементов: ${value.length}, Значение:\n`;

        for (let i = 0; i < value.length; i++) {
            const elementDescription = describe(value[i], level + 1);

            result += `${nextIndent}- ${elementDescription.slice(nextIndent.length)}`;

            if (i < value.length - 1) {
                result += '\n';
            }
        }

        return result;

    } else if (Number.isNaN(value)) {
        return `${indent}Тип: NaN, Значение: NaN`;

    } else if (typeof value === 'string') {
        return `${indent}Тип: string, Значение: ${value}, Длина: ${value.length}`;

    } else if (typeof value === 'object') {
        const keys = Object.keys(value);

        if (keys.length === 0) {
            return `${indent}Тип: object, Значение: {}, Ключи: нет`;
        }

        let result = `${indent}Тип: object, Ключи: ${keys.join(', ')}, Значение:\n`;

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const propertyDescription = describe(value[key], level + 1);

            result += `${nextIndent}- ${key}: ${propertyDescription.slice(nextIndent.length)}`;

            if (i < keys.length - 1) {
                result += '\n';
            }
        }

        return result;

    } else if (typeof value === 'function') {
        return `${indent}Тип: function, Значение: <function>, Аргументов: ${value.length}`;

    } else if (typeof value === 'bigint') {
        return `${indent}Тип: bigint, Значение: ${value}n`;

    } else if (typeof value === 'symbol') {
        if (value.description === undefined) {
            return `${indent}Тип: symbol, Значение: без описания`;
        } else {
            return `${indent}Тип: symbol, Значение: ${value.description}`;
        }

    } else {
        return `${indent}Тип: ${typeof value}, Значение: ${String(value)}`;
    }
}


