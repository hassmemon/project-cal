function renderTaskList() {
    const page = document.getElementById('page');
    const list = document.createElement('div');
    list.classList.add('w-2/3');
    page.replaceChildren(list);
    list.innerHTML=`
        <h2 class="text-3xl text-center">My List</h2>
    `;

    axios.get('/api/tasks').then((response) => {
        const tasks = response.data;
        const unorderedList = document.createElement('ul');
        renderData(tasks, unorderedList);
        list.appendChild(unorderedList);
        updateStatus();
    });
}

function renderData(tasks, parentList) {
    tasks.forEach((item) => {
        const listItem = document.createElement('li');
        const itemDiv = document.createElement('div');
        const details = document.createElement('details');
        details.classList.add("border", "rounded-lg", "m-1", "p-4", "shadow-md");
        const summary = document.createElement('summary');
        summary.classList.add("list-none", "text-xl", "border-b-4");
        summary.innerHTML = `<h2>${item.name} - Priority: ${item.priority}</h2>`;
        const description = document.createElement('p');
        description.innerHTML = `${item.description}`;
        const dueDate = document.createElement('p');
        dueDate.innerHTML = `Task due: ${moment(item.due_date).format("dddd, MMMM Do YYYY")}`;
        const statusCheck = document.createElement('p');
        statusCheck.innerHTML = `Complete `;
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('data-task-id', `${item.id}`);
        checkBox.setAttribute('class', `statusCheckbox`);
        if (item.status) {
            checkBox.setAttribute('checked', 'true');
        }
        const updateBtn = document.createElement('button');
        updateBtn.setAttribute('data-task-id', `${item.id}`);
        updateBtn.setAttribute('class', 'updateTaskBtn');
        updateBtn.innerHTML = `Update`;
        details.appendChild(summary);
        details.appendChild(description);
        details.appendChild(dueDate);
        statusCheck.appendChild(checkBox);
        details.appendChild(statusCheck);
        details.appendChild(updateBtn);
        itemDiv.appendChild(details);
        listItem.appendChild(itemDiv);
        parentList.appendChild(listItem);
    });
}
