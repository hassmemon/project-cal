function renderHeader(session = {}) {
    const header = document.querySelector('#header-nav');
    header.innerHTML = '';

    const title = document.createElement('a');
    title.href = '/';
    title.innerHTML = `<h1 class="text-8xl">Laminar</h1>`;

    header.appendChild(title);

    if (session.email) {
        header.innerHTML += `
        <div class="flex w-full justify-evenly items-center mt-6 mb-4 " id="navlist" >
            <p>Welcome, <span class="text-max_yellow_red">${session.name}.</span></p>
            <span class="btn btn-pill btn-pink" onClick="logout()">Logout</span>
        </div>
        `;
    } else {
        header.innerHTML += `
        <div class="flex w-full justify-center gap-x-14 mt-6 mb-4 " id="navlist" >
            <span class="btn btn-pill btn-pink" onClick="renderSignupForm()">Sign up</span>
            <span class="btn btn-pill btn-pink" onClick="renderLoginForm()">Login</span>
        </div>
        `;
    }
}
