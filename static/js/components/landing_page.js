function renderLandingPage(){
    console.log('I\'m here!');
    const page = document.querySelector('#page');
    page.innerHTML = `
    <div>
        <h1>Never forget about a task again!</h1>
    </div>
    `;

    page.appendChild(contentDiv);
}