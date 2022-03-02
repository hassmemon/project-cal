function renderSignupForm() {
    const page = document.getElementById('page');
    page.innerHTML = `
        <h2>Sign up</h2>
        <form id="signup" action="/api/users" method="POST">
            <p>Name:</p>
            <input type="text" name="name" required/>
            <p>Email:</p>
            <input type="text" name="email" required/>
            <p>Password:</p>
            <input type="password" name="password" required/>
            <button type="submit">Sign up</button>
        </form>
    `;

    const form = document.getElementById('signup');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrors();

        const nameField = document.querySelector('input[name=name]');
        const emailField = document.querySelector('input[name=email]');
        const passwordField = document.querySelector('input[name=password]');
        const body = {
            name: nameField.value,
            email: emailField.value,
            password: passwordField.value,
        };

        let error = null;
        if (body.name === '') {
            error = 'Name is required';
        } else if (body.password === '') {
            error = 'Password is required';
        } else if (body.email === '') {
            error = 'Email is required';
        }

        if (!error) {
            axios
                .post('/api/users', body)
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
