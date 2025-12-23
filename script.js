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
