// Ask if the user is logged in first

renderAppWithoutSession(); // Or render a loading spinner
// then look for logged in user
renderAppWithSession();

function renderAppWithoutSession() {
    console.log('no session');
    renderHeader();
    renderLandingPage();
}

function renderAppWithSession() {
    getSession().then((session) => {
        console.log(`I have a ${session}`);
        renderHeader(session);
        renderTaskHeader();
    }).catch((error)=>{
        console.log(`${error}`);
    });
}
//the password is password
