function renderTaskList() {
    const page = document.getElementById('page');
    const list = document.createElement('div');
    page.replaceChildren(list);

    axios.get('/api/tasks').then((response) => {
        const tasks = response.data;
        tasks.forEach((task) => {
            let taskDiv = document.createElement('div');
            list.appendChild(taskDiv).innerHTML = `
                <h3 onclick="renderTaskDetail(${task.id})">
                    ${task.name}
                </h3>
            `;
        });
    });
}
