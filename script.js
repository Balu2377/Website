function toggleMenu() {
    const nav = document.getElementById('navContainer');
    // This adds or removes the "active" class when you click the hamburger
    nav.classList.toggle('active');
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

