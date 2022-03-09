function renderCreateForm() {
    const page = document.getElementById('page');
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');
    modalDiv.innerHTML = `
    <div class="form-container form-trans-solid">
            <h2 class="text-5xl text-center">Create New Task</h2>
            <form class="mt-3" id="createTask" action="/api/tasks" method="POST">
                <div class="form-row">
                    <p>Task Name</p>
                    <input class="form-input" type="name" name="name" required/>
                </div>
                <div class="form-row">
                    <p>Task Description:</p>
                    <textarea class="form-input" id="description" name="description" rows="4" required></textarea>
                </div>
                <div class="form-row">
                    <p>Task Priority</p>
                    <select class="form-select" name="priority" id="priority">
                        <option class="bg-light_coral hover:none" value="1">Urgent</option>
                        <option class="bg-max_yellow_red" value="2">Medium</option>
                        <option class="bg-cg_blue" value="3" selected>Low</option>
                    </select>
                </div>
                <div class="form-row">
                    <p>Due Date</p>
                    <input class="form-input" type="date" name="due-date" required/>
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-sqr btn-blue" type="submit">Create Task</button>
                    <button id="addTaskModalClose" class="btn btn-sqr btn-blue" type="button" >Cancel Create</button>
                </div>
            </form>
        </div>
    `;

    page.appendChild(modalDiv);

    const closeModalBtn = document.querySelector('#addTaskModalClose');
    closeModalBtn.addEventListener('click',(e)=>{
        modalDiv.remove();
    });

    const form = document.getElementById('createTask');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

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
        } else if (body.priority === 1 && body.dueDate === '') {
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
