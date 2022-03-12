function renderUpdateForm(id, listType) {
    axios.get(`/api/tasks/${id}`).then((response) => {
        const task = response.data;
        displayUpdateForm(task, listType);
        console.log(response.data);
    });
}

function displayUpdateForm(task, listType) {
    const page = document.getElementById('page');
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');
    modalDiv.innerHTML = `
    <div class="form-container form-trans-solid">
            <h2 class="text-5xl text-center">Update Task</h2>
            <form class="mt-3" id="updateTask" action="/api/tasks" method="PUT">
                <div class="form-row">
                    <p>Task Name</p>
                    <input class="form-input" value="${task.name}" type="name" name="name" required/>
                </div>
                <div class="form-row">
                    <p>Task Description:</p>
                    <textarea class="form-input" id="description" name="description" rows="4" required>${task.description}
                    </textarea>
                </div>
                <div class="form-row">
                    <p>Task Priority</p>
                    <select class="form-select" name="priority" id="priority">
                        <option class="bg-light_coral hover:none" value="1" ${task.priority === 1 ? 'selected' : ''}>Urgent</option>
                        <option class="bg-max_yellow_red" value="2" ${task.priority === 2 ? 'selected' : ''}>Medium</option>
                        <option class="bg-cg_blue" value="3" ${task.priority === 3 ? 'selected' : ''}>Low</option>
                    </select>
                </div>
                <div class="form-row">
                    <p>Due Date</p>
                    <input class="form-input" value="${moment(task.due_date).format('YYYY-MM-DD')}" type="date" name="due-date" required/>
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-sqr btn-blue" type="submit">Update Task</button>
                    <button id="updateTaskModalClose" class="btn btn-sqr btn-blue" type="button" >Cancel Update</button>
                    <button id="deleteButton" class="btn btn-sqr btn-pink" type="button" >Delete Task</button>
                </div>
            </form>
        </div>
    `;
    page.appendChild(modalDiv);

    const closeUpdateModalBtn = document.querySelector('#updateTaskModalClose');
    closeUpdateModalBtn.addEventListener('click', (e) => {
        modalDiv.remove();
    });

    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', () => {
        deleteTask(task.id, listType);
        modalDiv.remove();
    });

    const form = document.getElementById('updateTask');
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
                .put(`/api/tasks/${task.id}`, body)
                .then((response) => {
                    // Is a 2XX response code
                    if (listType === 'pending'){
                        showPending();
                    } else {
                        showCompleted();
                    }
                    modalDiv.remove();
                })
                .catch((error) => {
                    // Is a greater than 2XX response code. E.g. 422, 500 error
                    // Only runs on Error
                    displayError(error.response.data.message);
                });
        } else {
            displayError(error);
        }
    });
}
