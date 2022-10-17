const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="passworld"]');
    const submitButton = document.querySelector('.btn-login');

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://regres.in/api/login', {
                method: 'POST',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.velue,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })
    }
}
window.onload = init;