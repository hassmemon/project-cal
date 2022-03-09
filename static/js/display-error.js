function displayError(errorText) {
    const page = document.getElementById('page');
    const divError = document.createElement('div');
    divError.classList.add('error', 'alert');
    divError.setAttribute('role', 'alert');
    const alertIcon = document.createElement('span');
    alertIcon.classList.add('mr-2');
    alertIcon.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        `;
    const errorMessage = document.createElement('span');
    errorMessage.classList.add('mr-2');
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

    divError.appendChild(alertIcon);
    divError.appendChild(errorMessage);
    divError.appendChild(dismissBtn);
    page.prepend(divError);
}
