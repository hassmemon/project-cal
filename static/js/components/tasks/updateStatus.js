function updateStatus(listType) {
    const allStatusCheckBoxes = document.querySelectorAll('.statusCheckbox');
    allStatusCheckBoxes.forEach((checkbox) => {
        checkbox.addEventListener('change', (event) => {
            let updatedStatus = event.target.checked ? true : false;
            console.log(updatedStatus);
            //CSS change colour to green
            const body = {
                status: updatedStatus,
            };
            const id = event.target.dataset.taskId;
            axios.patch(`/api/tasks/${id}`, body).then((response) => {
                if (listType === 'pending'){
                    showPending();
                } else {
                    showCompleted();
                }

            });
        });
    });
}
