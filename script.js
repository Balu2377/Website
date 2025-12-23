// script.js
function toggleLanguage() {
    const body = document.body;
    const btn = document.getElementById('langBtn');

    // Toggle the class on the body element
    body.classList.toggle('english-mode');

    // Change the button text based on the mode
    if (body.classList.contains('english-mode')) {
        btn.innerText = "తెలుగు";
    } else {
        btn.innerText = "English";
    }
}
