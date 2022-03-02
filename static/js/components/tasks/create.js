function renderCreateForm() {
    const page = document.getElementById('page');
    page.innerHTML = `
        <form id="createTask" action="/api/tasks" method="POST">
            <p>Task Name</p>
            <input type="name" name="name" required/>
            <p>Task Description:</p>
            <textarea id="description" name="description" rows="4" required></textarea>
            <p>Task Priority</p>
            <select name="priority" id="priority">
                <option value="0">Urgent</option>
                <option value="1">Medium</option>
                <option value="2" selected>Low</option>
            </select>
            <p>Due Date</p>
            <input type="date" name="due-date" required/>
            <button type="submit">Create</button>
        </form>
    `;

    const form = document.getElementById('createTask');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrors();

        const nameField = document.querySelector('input[name=name]');
        const descriptionField = document.querySelector(
            'textarea[name=description]'
        );
        const priorityField = document.querySelector('select[name=priority]');
        const dueDateField = document.querySelector('input[name=due-date]');
        const body = {
            name: nameField.value,
            description: descriptionField.value,
            priority: priorityField.value,
            dueDate: dueDateField.value,
        };

        let error = null;
        if (body.name === '') {
            error = 'Name is required';
        } else if (body.description === '') {
            error = 'Description is required';
        } else if (body.priority === '') {
            error = 'Priority is required';
        } else if (body.dueDate === '') {
            error = 'Due date is required';
        }

        if (!error) {
            axios
                .post('/api/tasks', body)
                .then((response) => {
                    // Is a 2XX response code
                    console.log(response);
                    renderTaskList();
                })
                .catch((error) => {
                    // Is a greater than 2XX response code. E.g. 422, 500 error
                    // Only runs on Error
                    console.log(error);
                    displayError(error.response.data.message);
                });
        } else {
            displayError(error);
        }
    });
}
