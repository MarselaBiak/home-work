| № | Сцена | Что вывелось | Кто виноват | Как избежать |
|---|---|---|---|---|
| 1 | `let name; console.log(name);` | undefined | переменной не дано значение | сразу присвоить переменной значение |
| 2 | `let name = null; console.log(name);` | null | переменной присвоен `null` | проверять значение перед использованием |
| 3 | `function greet(user) { console.log('Hello,', user); } greet();` | Hello, undefined | в вызове функции не передеют значение | предать аргумент `greet('какое-то имя')` или задать значение по умолчанию |
| 4 | `function calculate(a, b) { return a + b; // забули повернути результат окремої змінної } console.log(calculate(2, 3));` | 5 | просто возращается результат | функция правильно возвращает результат |
| 5 | `function calculate(a, b) { let result = a + b; // не написали return } console.log(calculate(2, 3));` | undefined | нет `return`, результат не возращается | написать `return result` |
| 6 | `function calculate(a, b) { return; } console.log(calculate(2, 3))` | undefined | `return` ничего не возвращает, нет действий в функции | после `return` указать возвращаемое значение |
| 7 | `const user = { firstName: 'John', lastName: 'Doe' }; console.log(user.age);` | undefined | в объекте user нет свойства `age` | добавить свойство `age` или проверить его наличие |
| 8 | `const user = { firstName: 'John', middleName: null,   // розробник свідомо сказав, що середнього імені немає lastName: 'Doe' }; console.log(user.middleName);` | null | специально заданный `null` | перед использованием проверять на `null` |
| 9 | `const arr = [10, 20, 30]; console.log(arr[10]);` | undefined | в массиве нет элемента с индексом 10 | проверять, существует ли такой индекс |
| 10 | `const user = { name: 'Anna', address: { city: 'Kyiv' } }; console.log(user.address.street);` | undefined | в объекте `address` нет свойства `street` | добавить свойство `street` или проверить его перед обращением |











