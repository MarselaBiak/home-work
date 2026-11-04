"use strict";

    function View() {
        const createForm = document.querySelector('[data-create-form]')
        const container = document.querySelector('[data-todo-list]')
        const editForm = document.querySelector('[data-edit-form]')
        const deleteForm = document.querySelector('[data-delete-form]')
        const filterButtons = document.querySelectorAll('[data-filter]')

        function renderTodos(todos){
            container.textContent = ''

            if(todos.length === 0) {
                const text = document.createElement('h4')

                text.textContent = 'Пока нет задач'
                text.classList.add('text-center', 'text-secondary', 'mt-4')
                container.append(text)
                
                return 
            }

            todos.forEach(el => {
                const card = document.createElement('div')
                const cardHeader = document.createElement('div')
                const titleContainer = document.createElement('div')
                const checkbox = document.createElement('input')
                const title = document.createElement('h5')
                const description = document.createElement('p')
                const cardBody = document.createElement('div')
                const dateCreated = document.createElement('small')
                const dateUpdated = document.createElement('small')
                const btnContainer = document.createElement('div')
                const btnEdit = document.createElement('button')
                const btnDelete = document.createElement('button')

                card.classList.add('card', 'shadow-sm', 'mb-3')
                card.dataset.todoId = el.id

                cardHeader.classList.add('card-body')

                titleContainer.classList.add('d-flex', 'align-items-center', 'gap-3')

                checkbox.classList.add('form-check-input')
                checkbox.type = 'checkbox'
                checkbox.dataset.toggle = ''
                checkbox.checked = el.completed

                title.classList.add('card-title', 'mb-0')
                title.textContent = el.title

                description.classList.add('card-text', 'text-secondary', 'mt-3')
                description.textContent = el.description

                if (el.completed) {
                    title.classList.add('text-decoration-line-through', 'text-secondary')
                }

                cardBody.classList.add('d-flex', 'justify-content-between', 'align-items-center')

                dateCreated.classList.add('text-secondary')
                dateCreated.textContent = `Создано: ${el.createdAt.slice(0, 10)}`

                dateUpdated.classList.add('text-secondary')
                dateUpdated.textContent = el.createdAt === el.updatedAt ? 'Обновлений не было' : `Обновлено: ${el.updatedAt.slice(0, 10)}`

                btnContainer.classList.add('d-flex', 'gap-2')

                btnEdit.classList.add('btn-outline', 'theme-primary')
                btnEdit.type = 'button'
                btnEdit.dataset.edit = ''
                btnEdit.textContent = 'Редактировать'

                btnDelete.classList.add('btn-outline', 'theme-danger')
                btnDelete.type = 'button'
                btnDelete.dataset.delete = ''
                btnDelete.textContent = 'Удалить'

                titleContainer.append(checkbox, title)
                btnContainer.append(btnEdit, btnDelete)
                cardBody.append(dateCreated, dateUpdated, btnContainer)

                cardHeader.append(titleContainer, description, cardBody)
                card.append(cardHeader)

                container.append(card)
            });
        }

        function renderEditTodoModalData(todo) {
            const id = editForm.querySelector('[name="id"]')
            const editTitle = editForm.querySelector('[name="title"]')
            const editDescription = editForm.querySelector('[name="description"]')

            id.value = todo.id
            editTitle.value = todo.title
            editDescription.value = todo.description
        }

        function renderDeleteTodoModalData(todo) {
            const id = deleteForm.querySelector('[name="id"]')
            const titleTask = deleteForm.querySelector('[data-delete-title]')
    
            id.value = todo.id
            titleTask.textContent = todo.title
        }

        function setActiveFilter(status) {
            filterButtons.forEach(el => {
                const isActive = el.dataset.filter === status

                el.className = isActive
                    ? "btn-solid theme-inverse active"
                    : "btn-outline theme-inverse"

                el.ariaPressed = isActive ? "true" : "false"
            })  
        }

        function resetCreateForm() {
            createForm.reset()
        }

        return {
            renderTodos,
            renderEditTodoModalData,
            renderDeleteTodoModalData,
            setActiveFilter,
            resetCreateForm
        }

    }

export default View;