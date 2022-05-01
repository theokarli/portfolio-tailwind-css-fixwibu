// Navbar Fixed
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop; // selisih antara header dengan top
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) { // klu scroll yg kita buat lbh besar dri nilai fixedNav, maka ...
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
        
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');

    }

});



// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => { // When the user clicks the hamburger menu, maka cek apakah menu sudah di buka atau belum.
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});



// Klik di luar menu, maka menu akan disembunyikan
window.addEventListener('click', (e) => { // Klik di luar menu, maka menu akan disembunyikan
    if (e.target !== hamburger && e.target !== navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    };
});



// DarkMode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => { // klu toggle kita klik, maka...
    
    if (darkToggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    if (html.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

/* check & apply last time selected theme from localStorage */

if (localStorage.getItem("theme") === "light" || !('theme' in localStorage)) { // kalau nilai theme = white atau tidak ada nilai theme, maka...
    localStorage.setItem("theme", "light");
    html.classList.remove("dark");
    darkToggle.checked = false;
} else {
    html.classList.add("dark");
    darkToggle.checked = true;
}