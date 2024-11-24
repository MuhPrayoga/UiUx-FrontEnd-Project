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
function showContent(id) {
    // Sembunyikan semua konten
    const contents = document.querySelectorAll('[id^="depresi"], [id^="bipolar"], [id^="skizofrenia"], [id^="kecemasan"]');
    contents.forEach(content => content.classList.add('hidden'));

    // Tampilkan konten sesuai ID yang dipilih
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
}