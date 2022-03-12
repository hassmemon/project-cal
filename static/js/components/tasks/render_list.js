function renderData(tasks, parentList, listtype) {
    tasks.forEach((item) => {
        const listItem = document.createElement('li');
        const itemDiv = document.createElement('div');
        itemDiv.classList.add("mb-4");
        const details = document.createElement('details');
        details.classList.add("card");
        if (item.priority === 1){
            details.classList.add("bg-light_coral/[0.5]");
        } else if (item.priority === 2) {
            details.classList.add("bg-max_yellow_red/[0.5]")
        } else {
            details.classList.add("bg-caribbean_green/[0.5]")
        }
        const summary = document.createElement('summary');
        summary.classList.add("card-title");
        summary.innerHTML = `<h2>${item.name}</h2>`;

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('flex', 'flex-col', 'items-center');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('w-full');

        const description = document.createElement('p');
        description.innerHTML = `${item.description}`;
        const dueDate = document.createElement('p');
        dueDate.innerHTML = `Task due: ${moment(item.due_date).format("dddd, MMMM Do YYYY")}`;
        const statusCheck = document.createElement('span');
        statusCheck.innerHTML = `Done? `;
        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.setAttribute('data-task-id', `${item.id}`);
        checkBox.setAttribute('class', `statusCheckbox`);
        if (item.status) {
            checkBox.setAttribute('checked', 'true');
        }
        const updateBtn = document.createElement('button');
        updateBtn.setAttribute('data-task-id', `${item.id}`);
        updateBtn.addEventListener('click', (e)=>{
            renderUpdateForm(item.id, listtype);
        });
        updateBtn.classList.add('updateTaskBtn', 'btn', 'btn-pill', 'btn-english_violet', 'text-center')
        updateBtn.innerHTML = `Update`;
        details.appendChild(summary);
        taskDetails.appendChild(description);
        taskDetails.appendChild(dueDate);
        taskDetails.appendChild(statusCheck);
        statusCheck.appendChild(checkBox);
        infoContainer.appendChild(taskDetails);
        infoContainer.appendChild(updateBtn);
        details.appendChild(infoContainer);
        itemDiv.appendChild(details);
        listItem.appendChild(itemDiv);
        parentList.appendChild(listItem);
    });
}
