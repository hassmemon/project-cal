function showPending() {
    const listTitle = document.querySelector('#listTypeTitle');
    listTitle.innerHTML="Pending";
    const pendingBtn = document.querySelector('#btnPending');
    pendingBtn.classList.add('hidden');
    const  completedBtn = document.querySelector('#btnCompleted');
    completedBtn.classList.remove('hidden');
    const parentList = document.querySelector('#tasksList');
    parentList.replaceChildren();
    axios.get('/api/tasks').then((response) => {
        const tasks = response.data;
        renderData(tasks, parentList, 'pending');
        updateStatus('pending');
    });
}

function showCompleted(){
    const listTitle = document.querySelector('#listTypeTitle');
    listTitle.innerHTML="Completed";
    const pendingBtn = document.querySelector('#btnPending');
    pendingBtn.classList.remove('hidden');
    const  completedBtn = document.querySelector('#btnCompleted');
    completedBtn.classList.add('hidden');
    const parentList = document.querySelector('#tasksList');
    parentList.replaceChildren();
    const query = {
        params: {
            status: true
        }
    }
    axios.get('api/tasks', query).then(response=>{
        const completedTasks = response.data;
        renderData(completedTasks, parentList, 'completed');
        updateStatus('completed');
    })
}