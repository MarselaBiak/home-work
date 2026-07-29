| № | Выражение | Моя гипотеза | Реальный результат | Пояснение |
|---|---|---|---|---|
| 1 | 42 | number | number | это число |
| 2 | 42n | bigint | bigint | в конце n это большое число |
| 3 | 'hello' | string | string | это текст |
| 4 | true | boolean | boolean | догическое значение  |
| 5 | undefined | undefined | undefined | значение не задано |
| 6 | null | null | object | особенность js |
| 7 | NaN | number | number | специальное числовое значение |
| 8 | Infinity | number | number | бесконечное числовое значение |
| 9 | Symbol('id') | symbol | symbol | уникальный идентификатор |
| 10 | {} | object | object | пустой объект |
| 11 | [] | object | object | массив считается объектом |
| 12 | [1, 2, 3] | object | object | массив считается объектом |
| 13 | function() {} | function | function | обыяная функция |
| 14 | (() => {}) | function | function | стрелочная функция |
| 15 | (2 + 2) | number | number | сложение чисел |
| 16 | ('2' + 2) | string | string | строка и число склеиваются |
| 17 | ('foo' - 'bar') | number | number | результат нан, что означает число |
| 18 | x | undefined | undefined | переменная созданная без значения |
| 19 | typeof nonExistentVariable | undefined | undefined |  `typeof` не вызывает ошибку для неизвестной переменной |
| 20 | typeof 42 | string | string | `typeof` всегда возвращает строку |

---

# Підозрілі справи

### `typeof null`

Результат:

```js
typeof null // 'object'
```

Это выглядит как ошибка, потому что `null` не является объектом. Это старая особенность JavaScript.  

Правильная проверка:

```js
value === null
```

---

### `typeof []`

Результат:

```js
typeof [] // 'object'
```

Массив является отдельным видом объекта, поэтому `typeof не показывает `array`.  

Правильная проверка:

```js
Array.isArray(value)
```

### `typeof NaN`

Результат:

```js
typeof NaN // 'number'
```

Это выглядит странно, потому что `NaN` означает «не число», но технически относится к типу `number`.

Правильная проверка:

```js
Number.isNaN(value)
```

### `typeof nonExistentVariable`

Результат:

```js
typeof nonExistentVariable // 'undefined'
```

`typeof` не вызывает ошибку, даже если переменная не была объявлена.

Но если написать переменную без `typeof`:

```js
nonExistentVariable
```

будет ошибка `ReferenceError`.

Правильная проверка:

```js
typeof nonExistentVariable === 'undefined'
```

Это можно вставить в `answers.md` после таблицы.






