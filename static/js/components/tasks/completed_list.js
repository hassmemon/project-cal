function showCompleted(){
    const parentList = document.querySelector('#tasksList');
    parentList.replaceChildren();
    const body = {
        params: {
            status: true
        }
    }
    axios.get('api/tasks', body).then(response=>{
        const completedTasks = response.data;
        renderData(completedTasks, parentList);
        updateStatus();;
    })
}