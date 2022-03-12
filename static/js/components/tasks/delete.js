function deleteTask(id) {
    axios
        .delete(`/api/tasks/${id}`)
        .then((response) => {
            renderTaskList();
        })
        .catch((error) => {
            // Is a greater than 2XX response code. E.g. 422, 500 error
            // Only runs on Error
            console.log(error);
            displayError(error.response.data.message);
        });
}
