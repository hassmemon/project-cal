// Ask if the user is logged in first

renderAppWithoutSession(); // Or render a loading spinner
// then look for logged in user
renderAppWithSession();

function renderAppWithoutSession() {
    renderHeader();
    // renderLandingPage();
}

function renderAppWithSession() {
    getSession().then((session) => {
        renderHeader(session);
        renderTaskList();
    });
}
//the password is password
