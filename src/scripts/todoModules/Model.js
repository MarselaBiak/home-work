"use strict";

import STORAGE_KEY from '../constants.js';
import initialTodos from '../data/todos.js';

function Model() {
    const data = localStorage.getItem(STORAGE_KEY)

    if(data === null){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTodos))
    }

    function createDate(){
        return new Date()
    }

    function updateData(data){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    }

    function getData() {
        const arrData = JSON.parse(localStorage.getItem(STORAGE_KEY))
        return arrData
    }

    function getTodoById(id){
        return getData().find(el => el.id === id)
    }

    function addItem(item) {
        const clearTitle = item.title.trim()
        if(clearTitle === ''){
            return 
        }

        const todos = getData()
        const data = todos.map(el => el.id)
        const id = data.length !== 0 ? Math.max(...data) + 1 : 1

        const newTodo = {
            id: id,
            title : clearTitle,
            description: (item.description ?? '').trim(),
            completed: false,
            createdAt: createDate(),
            updatedAt: createDate()
        }

        todos.push(newTodo)
        
        updateData(todos)
        
        return newTodo
    }

    function updateTodoById(task) {
        let data = getData()
        const inLineTask = getTodoById(task.id)

        if(inLineTask === undefined) return

        if(task.title.trim() === '') return

        inLineTask.title = task.title.trim()
        inLineTask.description = (task.description ?? '').trim()
        inLineTask.updatedAt = createDate()

        data = data.map(el => el.id === task.id ? inLineTask : el)

        updateData(data)

        return inLineTask
    }

    function toggleTodoById(id) {
        let data = getData()
        const inLineTask = getTodoById(id)

        if(inLineTask === undefined) return

        inLineTask.completed = !inLineTask.completed
        inLineTask.updatedAt = createDate()

        data = data.map(el => el.id === id ? inLineTask : el)

        updateData(data)

        return inLineTask
    }

    function removeTodoById(id){
        const data = getData()
        const inLineTask = getTodoById(id)

        if(inLineTask === undefined) return

        const updatedData = data.filter(el => el.id !== id)
        updateData(updatedData)

        return inLineTask
    }

    function getFilteredTodos(query, status) {
        let updatedData = getData()

        if(status === 'active'){
            updatedData = updatedData.filter(el => el.completed === false)
        }

        if(status === 'completed'){
            updatedData = updatedData.filter(el => el.completed === true)
        }

        const search = query.toLowerCase().trim()
        const filteredSearchResult = updatedData.filter(el => el.title.toLowerCase().includes(search)) 

        return filteredSearchResult

    }

    return {
        getData,
        getTodoById,
        addItem,
        updateTodoById,
        toggleTodoById,
        removeTodoById,
        getFilteredTodos
    }

}

export default Model;