function renderLoginForm() {
    const page = document.getElementById('page');
    page.innerHTML = `
        <h2>Login</h2>
        <form id="login" action="/api/sessions" method="POST">
            <p>Email:</p>
            <input type="text" name="email" required/>
            <p>Password:</p>
            <input type="password" name="password" required/>
            <button type="submit">Login</button>
        </form>
    `;

    const form = document.getElementById('login');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrors();

        const emailField = document.querySelector('input[name=email]');
        const passwordField = document.querySelector('input[name=password]');
        const body = {
            email: emailField.value,
            password: passwordField.value,
        };

        let error = null;
        if (body.email === '') {
            error = 'Email is required';
        } else if (body.password === '') {
            error = 'Password is required';
        }

        if (!error) {
            axios
                .post('/api/sessions', body)
                .then((response) => {
                    // Is a 2XX response code
                    renderAppWithSession();
                })
                .catch((error) => {
                    // Is a greater than 2XX response code. E.g. 422, 500 error
                    // Only runs on Error
                    displayError(error.response.data.message);
                });
        } else {
            displayError(error);
        }
    });
}
