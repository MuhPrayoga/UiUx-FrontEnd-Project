/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}", // Sesuaikan path file HTML atau JS Anda
        "./public/index.html", // Tambahkan path file yang sesuai
    ],
    theme: {
        extend: {
            colors: {
                lightGreen: '#7CF5FF', // Warna kustom lightGreen
            },
        },
    },
    plugins: [],
};