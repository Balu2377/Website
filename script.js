function toggleMenu() {
    const nav = document.getElementById('navContainer');
    // Only works on mobile screens
    if (window.innerWidth <= 768) {
        nav.classList.toggle('active');
    }
}
function toggleLanguage() {
    const body = document.body;
    const btn = document.getElementById('langBtn');

    body.classList.toggle('english-mode');

    if (body.classList.contains('english-mode')) {
        btn.innerText = "తెలుగు";
    } else {
        btn.innerText = "English";
    }
}

