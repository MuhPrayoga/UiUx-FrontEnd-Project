document.getElementById('signin-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        errorShow("Password tidak cocok!");
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Akun berhasil dibuat!");
    window.location.href = 'Login.html';
});

function errorShow(message) {
    const modal = document.getElementById('error-modal');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    modal.classList.remove('hidden');
    document.getElementById('close-modal').addEventListener('click', function () {
        modal.classList.add('hidden');
    });
}
