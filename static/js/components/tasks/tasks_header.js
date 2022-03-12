function renderTaskHeader(){
    const page = document.getElementById('page');
    const list = document.createElement('div');
    list.classList.add('w-2/3');
    page.replaceChildren(list);
    list.innerHTML=`
        <h2 class="text-3xl text-center mb-4">My <span id="listTypeTitle">Pending</span> Tasks!</h2>
        <div class="flex justify-between">
            <button class="btn btn-pill btn-yellow mb-4" id="newTask" onClick="renderCreateForm()">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                    </svg> 
                    <span class="ml-2">New</span>
            </button>
        
            <button class="btn btn-pill btn-yellow mb-4" id="btnCompleted" onClick="showCompleted()">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg> 
                    <span class="ml-2" id="listSelectorText">Show Completed</span>
            </button>
            
            <button class="btn btn-pill btn-yellow mb-4 hidden" id="btnPending" onClick="showPending()">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                    </svg> 
                    <span class="ml-2" id="listSelectorText">Show Pending</span>
            </button>
        </div>
        <ul id="tasksList">
        </ul>
    `;
    showPending();
}