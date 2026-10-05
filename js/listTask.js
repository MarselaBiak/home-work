'use strict';

const input = document.querySelector('.list-paragraph-adder form input')
const container = document.querySelector('.list-paragraph-adder')
const listContainer = document.querySelector('.list-holder')

container.addEventListener('click', function (event) {
    event.preventDefault()

    const addButton = event.target.closest('[data-add-buttun]')
    const removeButton = event.target.closest('[data-remove-btn]')

    if(addButton){
        
    const value = input.value
    if(value.length < 1) return;
    input.value = ''

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = value;
    deleteButton.textContent = '✖';

    deleteButton.setAttribute('data-remove-btn', 0)

    li.append(deleteButton);
    listContainer.append(li);

    } else if(removeButton){
        removeButton.parentElement.remove()

    } else return;
})
