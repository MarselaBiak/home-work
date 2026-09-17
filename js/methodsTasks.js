'use strict';

const user = {
    name: 'Anna',
    age: 25,
    status: 'student',

    showName(city, country) {
        return `${this.name}, ${city}, ${country}`
    }
}

// bind 

const bind = (func, object, ...args)  => {
    return function() {
        object.temp = func
        const result = object.temp(...args)
        delete object.temp
        return result
    }
}

const newFunc = bind(user.showName, user, 'Odesa', 'Ukraine')

console.log(newFunc())

// call

const call = (func, object, ...args) => {
    object.temp = func
    const result = object.temp(...args)
    delete object.temp
    return result
}

console.log(call(user.showName, user, 'Odesa', 'Ukraine'))

// apply

const apply = (func, object, args) => {
    object.temp = func
    const result = object.temp(...args)
    delete object.temp
    return result
}

console.log(apply(user.showName, user, ['Odesa', 'Ukraine']))
