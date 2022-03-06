function renderSignupForm() {
    const page = document.getElementById('page');
    page.innerHTML = `
        <div class="form-container">
            <h2 class="text-5xl text-center">Sign up</h2>
            <form class="mt-3" id="signup" action="/api/users" method="POST">
                <div class="form-row">
                    <p>Name:</p>
                    <input class="form-input" type="text" name="name" required/>
                </div>
                <div class="form-row">
                    <p>Email:</p>
                    <input class="form-input" type="text" name="email" required/>
                </div>
                <div class="form-row">
                    <p>Password:</p>
                    <input class="form-input" type="password" name="password" required/>
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-blue" type="submit">Sign up</button>
                </div>
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
