function renderTaskList() {
    const page = document.getElementById('page');
    const list = document.createElement('div');
    page.replaceChildren(list);

    axios.get('/api/tasks').then((response) => {
        const tasks = response.data;
        const unorderedList = document.createElement("ul")
        renderData(tasks, unorderedList);
        list.appendChild(unorderedList);
    });
}

function renderData(tasks, parentList) {
    tasks.forEach((item) => {
        const listItem = document.createElement("li");
        const itemDiv = document.createElement("div");
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        summary.innerHTML=`<h2>${item.name} - Priority: ${item.priority}</h2>`
        const description = document.createElement("p");
        description.innerHTML =`${item.description}`
        const dueDate = document.createElement("p");
        dueDate.innerHTML=`${item.due_date}`
        const statusCheck = document.createElement("p");
        statusCheck.innerHTML=`Complete `;
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.setAttribute("data-task-id", `${item.id}`)
        checkBox.setAttribute("id", `statusCheckbox`);
        if (item.status) {
            checkBox.setAttribute("checked", 'true');
        }
        const updateBtn = document.createElement("button");
        updateBtn.setAttribute("data-task-id", `${item.id}`);
        updateBtn.setAttribute("id", "updateTaskBtn");
        updateBtn.innerHTML=`Update`;
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