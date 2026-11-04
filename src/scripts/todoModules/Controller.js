"use strict";

function Controller(model, view) {
    const isActiveFilter = localStorage.getItem('filter')
    const isActiveSearch = localStorage.getItem('search')
    const isInputTitleFull = localStorage.getItem('inputTitle')
    const isInputDescriptionFull= localStorage.getItem('inputDescription')

    const createForm =  document.querySelector('[data-create-form]')
    const titleInput = createForm.querySelector('#title')
    const descriptionInput = createForm.querySelector('#description')

    const todoList = document.querySelector('[data-todo-list]')
    const searchInput = document.querySelector('[data-search]')
    const filterOptions = document.querySelector('[data-filters]')
    const modalEdit = document.querySelector('#editTodoDialog')
    const modalSaveChangesBtn = modalEdit.querySelector('[data-confirm-save]')
    const modalDelete = document.querySelector('#deleteTodoDialog')
    const modalDeleteBtn = modalDelete.querySelector('[data-confirm-delete]')

    const url = new URL(window.location.href)
    const urlAction = url.searchParams.get('action')
    const urlTodoId = url.searchParams.get('todoId')
    const urlFilter = url.searchParams.get('filter')

    const validFilters = ['all', 'active', 'completed']

    let currentStatus = 'all'

    if (validFilters.includes(urlFilter)) {
        currentStatus = urlFilter
    } else if (validFilters.includes(isActiveFilter)) {
        currentStatus = isActiveFilter
    }

    function render() {
        const currentQuery = searchInput.value
        const filteredData = model.getFilteredTodos(currentQuery, currentStatus)
        
        view.renderTodos(filteredData)
    }

    function updateModalUrl(action, id) {
        url.searchParams.set('action', action)
        url.searchParams.set('todoId', id)
        history.replaceState(null, '', url)
    }

    function clearModalUrl() {
        url.searchParams.delete('action')
        url.searchParams.delete('todoId')
        history.replaceState(null, '', url)
    }

    function applyFilter() {
        url.searchParams.set('filter', currentStatus)
        history.replaceState(null, '', url)

        localStorage.setItem('filter', currentStatus)

        view.setActiveFilter(currentStatus)
        render()
    }

    if (isActiveSearch !== null) {
        searchInput.value = isActiveSearch
    }

    if (isInputTitleFull !== null) {
        titleInput.value = isInputTitleFull
    }

    if (isInputDescriptionFull !== null) {
        descriptionInput.value = isInputDescriptionFull
    }

    view.setActiveFilter(currentStatus)
    render()

    if ((urlAction === 'edit' || urlAction === 'delete') && urlTodoId !== null && urlTodoId.trim() !== '') {
        const id = Number(urlTodoId)
        const item = Number.isInteger(id) && id > 0
            ? model.getTodoById(id)
            : undefined

        if (item !== undefined) {
            if (urlAction === 'edit') {
                view.renderEditTodoModalData(item)
                modalEdit.showModal()
            } else {
                view.renderDeleteTodoModalData(item)
                modalDelete.showModal()
            }
        } else {
            clearModalUrl()
        }
    } else if (urlAction !== null || urlTodoId !== null) {
        clearModalUrl()
    }

    createForm.addEventListener('submit', function(event) {
        event.preventDefault()

        const title = titleInput.value
        const description = descriptionInput.value

        const newTodo = model.addItem({
            title: title,
            description: description
        })

        if(newTodo === undefined) return

        view.resetCreateForm()

        localStorage.removeItem('inputTitle')
        localStorage.removeItem('inputDescription')

        render()
    })

    createForm.addEventListener('input', function(event) {
        localStorage.setItem('inputTitle', titleInput.value)
        localStorage.setItem('inputDescription', descriptionInput.value)
    })

    todoList.addEventListener('change', function(event) {
        const checkbox = event.target.closest('[data-toggle]')

        if(!checkbox) return

        const todo = checkbox.closest('[data-todo-id]')
        const id = Number(todo.dataset.todoId)

        model.toggleTodoById(id)
        
        render()
    })

    filterOptions.addEventListener('click', function(event) {
        const currentBtn = event.target.closest('[data-filter]')

        if(!currentBtn) return
        
        currentStatus = currentBtn.dataset.filter

        applyFilter()
    })

    searchInput.addEventListener('input', function() {
        localStorage.setItem('search', searchInput.value)
        render()
    })

    todoList.addEventListener('click', function(event) {
        const btnEdit = event.target.closest('[data-edit]')
        const btnDelete = event.target.closest('[data-delete]')

        if(!(btnEdit || btnDelete)) return

        const currentBtn = btnEdit || btnDelete
        const todo = currentBtn.closest('[data-todo-id]')
        const id = Number(todo.dataset.todoId)
        const item = model.getTodoById(id)

        if(item === undefined) return

        if(btnEdit){
            view.renderEditTodoModalData(item)
            modalEdit.showModal()

            updateModalUrl('edit', id)

        } else if(btnDelete){
            view.renderDeleteTodoModalData(item)
            modalDelete.showModal()

            updateModalUrl('delete', id)
        } 
    })

    modalEdit.addEventListener('close', function() {
        clearModalUrl()
    })

    modalDelete.addEventListener('close', function() {
        clearModalUrl()
    })

    modalSaveChangesBtn.addEventListener('click', function(event){
        event.preventDefault()

        const task = {
            id: Number(modalEdit.querySelector('[data-edit-id]').value),
            title: modalEdit.querySelector('[data-edit-title]').value,
            description: modalEdit.querySelector('[data-edit-description]').value
        }

        const isUpdated = model.updateTodoById(task)

        if(!isUpdated) return
        
        modalEdit.close()
        
        render()
    })

    modalDeleteBtn.addEventListener('click', function(event){
        event.preventDefault()

        const id = Number(modalDelete.querySelector('[data-delete-id]').value)

        const isDeleted = model.removeTodoById(id)

        if(!isDeleted) return
        
        modalDelete.close()

        render()
    })

    modalEdit.addEventListener('click', function(event) {
        const closeBtn = event.target.closest('[data-bs-dismiss]')
        const isOutside = event.target === modalEdit

        if(!(closeBtn || isOutside)) return 

        modalEdit.close()
    })

    modalDelete.addEventListener('click', function(event) {
        const closeBtn = event.target.closest('[data-bs-dismiss]')
        const isOutside = event.target === modalDelete

        if(!(closeBtn || isOutside)) return 

        modalDelete.close()
    })
}

export default Controller;