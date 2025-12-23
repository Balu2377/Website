function toggleLanguage() {
    // 1. Find the "body" of the website
    const body = document.body;
    
    // 2. Add or remove a special "telugu-mode" tag
    body.classList.toggle('telugu-active');
    
    // 3. Change the button text
    const btn = document.querySelector('.btn-toggle');
    if (body.classList.contains('telugu-active')) {
        btn.innerText = "Switch to English";
    } else {
        btn.innerText = "తెలుగులో చూడండి";
    }
}
