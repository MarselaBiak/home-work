'use strict';

const removeElement = (array, item) => {
        if(array.indexOf(item) !== -1){
            array.splice(array.indexOf(item), 1)
        }
    return array
}

const array = [1, 2, 3, 4, 5, 6, 7];
console.log(removeElement(array, 5 ));
console.log(removeElement(array, 2 ));
console.log(removeElement(array, 7 ));
