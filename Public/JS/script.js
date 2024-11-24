//Script profile menu
// JavaScript to toggle the dropdown menu
document.getElementById('profile-icon').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action
    const dropdown = document.getElementById('profile-dropdown');
    dropdown.classList.toggle('hidden'); // Toggle visibility of the dropdown
});

document.addEventListener('DOMContentLoaded', function () {
    const currentUser = localStorage.getItem("currentUser");
    const profileContainer = document.getElementById("profile-container");
    const loginButton = document.getElementById("login-button");
    const usernameText = document.getElementById("username-text");

    // Jika ada pengguna yang sedang login
    if (currentUser) {
        profileContainer.classList.remove("hidden"); // Tampilkan ikon profil
        loginButton.classList.add("hidden"); // Sembunyikan tombol login
        usernameText.textContent = currentUser;
    } else {
        profileContainer.classList.add("hidden"); // Sembunyikan ikon profil
        loginButton.classList.remove("hidden"); // Tampilkan tombol login
    }

    // Logout functionality
    document.getElementById('logout-button').addEventListener('click', function () {
        localStorage.removeItem("currentUser"); // Hapus pengguna dari localStorage
        alert("Anda telah berhasil logout!");
        window.location.reload(); // Muat ulang halaman untuk memperbarui tampilan
    });
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    const dropdown = document.getElementById('profile-dropdown');
    const profileIcon = document.getElementById('profile-icon');

    // Check if the click was outside the dropdown and the profile icon
    if (!profileIcon.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden'); // Hide the dropdown
    }
});

//Script seection2
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


const buttons = document.querySelectorAll('.menu-item');
const description = document.getElementById('description');

// Isi paragraf berdasarkan pilihan
const descriptions = {
    1: 'Depresi adalah gangguan suasana hati yang menyebabkan perasaan sedih mendalam, kehilangan minat, dan kehilangan energi secara terus-menerus. Penderita depresi bisa merasa putus asa, sulit tidur, dan bahkan kehilangan minat pada aktivitas yang sebelumnya mereka nikmati. Kondisi ini juga bisa memengaruhi fungsi fisik, seperti selera makan dan energi. ',
    2: 'Bipolar adalah gangguan mood yang melibatkan episode perubahan suasana hati ekstrem, yaitu mania (perasaan euforia atau energi berlebihan) dan depresi, yang dapat memengaruhi perilaku, energi, dan kemampuan seseorang untuk menjalani kehidupan secara normal.',
    3: 'Skizofrenia adalah gangguan mental serius yang memengaruhi cara seseorang berpikir, merasakan, dan berperilaku, sering kali ditandai dengan gejala seperti delusi, halusinasi, dan kesulitan membedakan realitas dari fantasi.',
    4: 'Kecemasan adalah gangguan kesehatan mental yang ditandai dengan rasa khawatir atau takut yang berlebihan dan terus-menerus terhadap situasi atau hal tertentu, yang dapat disertai gejala fisik seperti detak jantung cepat, napas pendek, dan gangguan tidur.'
};

// Fungsi untuk memperbarui tampilan
function updateContent(selectedValue) {
    // Update paragraf
    description.textContent = descriptions[selectedValue];

    // Reset semua tombol dan aktifkan yang dipilih
    buttons.forEach(button => {
        if (button.dataset.value === selectedValue) {
            button.classList.remove('bg-white', 'text-black', 'hover:bg-blue-500', 'hover:text-white');
            button.classList.add('bg-blue-500', 'text-white');
        } else {
            button.classList.remove('bg-blue-500', 'text-white');
            button.classList.add('bg-white', 'text-black', 'hover:bg-blue-500', 'hover:text-white');
        }
    });
}

// Tambahkan event listener ke semua tombol
buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateContent(button.dataset.value);
    });
});

// Set tampilan awal (Pilihan 1)
updateContent('1');

// script Artikel
// Fungsi untuk memperbarui tampilan artikel
function showContent(type) {
    // Menyembunyikan semua artikel
    const articles = document.querySelectorAll('.bg-blue-50');
    articles.forEach(article => {
        article.classList.add('hidden');
    });

    // Menampilkan artikel berdasarkan tipe
    if (type === 'depresi') {
        document.getElementById('depresi-1').classList.remove('hidden');
        document.getElementById('depresi-2').classList.remove('hidden');
        document.getElementById('depresi-3').classList.remove('hidden');
        document.getElementById('depresi-4').classList.remove('hidden');
        document.getElementById('depresi-5').classList.remove('hidden');
        document.getElementById('depresi-6').classList.remove('hidden');
    } else if (type === 'bipolar') {
        document.getElementById('bipolar-1').classList.remove('hidden');
        document.getElementById('bipolar-2').classList.remove('hidden');
        document.getElementById('bipolar-3').classList.remove('hidden');
        document.getElementById('bipolar-4').classList.remove('hidden');
        document.getElementById('bipolar-5').classList.remove('hidden');
        document.getElementById('bipolar-6').classList.remove('hidden');
    } else if (type === 'skizofrenia') {
        document.getElementById('skizofrenia-1').classList.remove('hidden');
        document.getElementById('skizofrenia-2').classList.remove('hidden');
        document.getElementById('skizofrenia-3').classList.remove('hidden');
        document.getElementById('skizofrenia-4').classList.remove('hidden');
        document.getElementById('skizofrenia-5').classList.remove('hidden');
        document.getElementById('skizofrenia-6').classList.remove('hidden');
    } else if (type === 'kecemasan') {
        document.getElementById('kecemasan-1').classList.remove('hidden');
        document.getElementById('kecemasan-2').classList.remove('hidden');
        document.getElementById('kecemasan-3').classList.remove('hidden');
        document.getElementById('kecemasan-4').classList.remove('hidden');
        document.getElementById('kecemasan-5').classList.remove('hidden');
        document.getElementById('kecemasan-6').classList.remove('hidden');
    }
}
