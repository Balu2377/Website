function toggleLang() {
    const body = document.body;
    const btn = document.querySelector('.lang-toggle');
    
    body.classList.toggle('lang-en');
    
    if (body.classList.contains('lang-en')) {
        btn.innerText = "తెలుగు";
    } else {
        btn.innerText = "English";
    }
}
