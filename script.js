function toggleLanguage() {
    const body = document.body;
    const btn = document.querySelector('.lang-switch');
    
    // Toggle the class on the body
    body.classList.toggle('eng-mode');
    
    // Change the button text
    if (body.classList.contains('eng-mode')) {
        btn.innerText = "తెలుగులోకి మార్చండి";
    } else {
        btn.innerText = "Switch to English";
    }
}
