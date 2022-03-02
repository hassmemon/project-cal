function renderHeader(session = {}) {
    const header = document.querySelector('#header-nav');
    header.innerHTML = `
        <h1>Calendar</h1>
    `;
    if (session.email) {
        header.innerHTML += `
        <ul id="navlist">
            <li onClick="renderCreateForm()">Create Task</li>
            <li onClick="renderTaskList()">Tasks</li>
            <li>Welcome, ${session.email}.</li>
            <li onClick="logout()">Logout</li>
        </ul>
        `;
    } else {
        header.innerHTML += `
        <ul id="navlist">
            <li onClick="renderSignupForm()">Sign up</li>
            <li onClick="renderLoginForm()">Login</li>
        </ul>
        `;
    }
}
