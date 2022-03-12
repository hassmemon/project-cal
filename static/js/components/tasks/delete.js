function deleteTask(id,listType) {
    axios
        .delete(`/api/tasks/${id}`)
        .then((response) => {
            if (listType === 'pending'){
                showPending();
            } else {
                showCompleted();
            }
        })
        .catch((error) => {
            // Is a greater than 2XX response code. E.g. 422, 500 error
            // Only runs on Error
            console.log(error);
            displayError(error.response.data.message);
        });
}
