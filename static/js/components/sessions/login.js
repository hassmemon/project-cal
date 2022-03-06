function renderLoginForm() {
    const page = document.getElementById('page');
    page.innerHTML = `
        <div class="form-container">
            <h2 class="text-5xl text-center">Login</h2>
            <form class="mt-3" id="login" action="/api/sessions" method="POST">
                <div class="form-row">
                    <p>Email:</p>
                    <input class="form-input" type="text" name="email" required/>
                </div>
                <div class="form-row pt-2">
                    <p>Password:</p>
                    <input class="form-input" type="password" name="password" required/>
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-blue" type="submit">Login</button>
                </div>
            </form>
        </div>
    `;

    const form = document.getElementById('login');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

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
