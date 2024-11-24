document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username);
    if (!user) {
        errorShow("Username belum terdaftar!");
        return;
    }
    if (user.password !== password) {
        errorShow("Password salah!");
        return;
    }
    alert("Login berhasil!");
    window.location.href = "index.html";
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
