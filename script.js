// script.js

function setLanguage(language) {
    if (language === 'es') {
        document.documentElement.lang = 'es';
        alert('Idioma cambiado a Español');
    } else if (language === 'en') {
        document.documentElement.lang = 'en';
        alert('Language changed to English');
    }
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function sendEstimate(event) {
    event.preventDefault();
    alert('Estimado enviado. Nos pondremos en contacto contigo pronto.');
    document.getElementById('estimate-form').reset();
}
