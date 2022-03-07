function displayError(errorText) {
    const page = document.getElementById('page');
    const divError = document.createElement('div');
    divError.classList.add('error', 'alert');
    divError.setAttribute('role', 'alert');
    const errorMessage = document.createElement('span');
    errorMessage.innerText = errorText;
    const dismissBtn = document.createElement('button');
    dismissBtn.setAttribute('data-dismiss','alert');
    dismissBtn.setAttribute('onclick','this.parentElement.remove();')
    dismissBtn.classList.add('w-4');
    dismissBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        `;

    divError.appendChild(errorMessage);
    divError.appendChild(dismissBtn);
    page.prepend(divError);
}
