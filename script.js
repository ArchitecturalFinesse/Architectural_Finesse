function setLanguage(lang) {
    document.documentElement.lang = lang;
    translatePage(lang);
}

function translatePage(lang) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(element) {
        var key = element.getAttribute('data-lang');
        element.textContent = translations[lang][key];
    });
}

var translations = {
    es: {
        'about-title': 'Sobre Nosotros',
        'about-text1': 'En Architectural Finesse, nos especializamos en transformar espacios con texturas y acabados que capturan la esencia de la elegancia y el lujo...',
        'about-text2': 'Nuestra misión es superar los límites de la excelencia estética, abrazando la innovación creativa y rompiendo con lo ordinario...',
        'about-text3': 'Bienvenidos a un mundo donde la belleza y la funcionalidad se encuentran, creando espacios que cuentan historias únicas y sofisticadas...',
        'estimate-title': 'Solicitar Estimado',
        'label-name': 'Nombre Completo:',
        'label-email': 'Correo Electrónico:',
        'label-phone': 'Número de Teléfono:',
        'label-municipality': 'Municipio:',
        'submit': 'Enviar',
        'contact-title': 'Contáctanos',
        'contact-text': 'Contáctanos a través de los siguientes canales:',
        'catalog-title': 'Catálogo',
        'catalog-text': 'Nuestros catálogos están disponibles a pedido. Por favor contáctenos para recibir los catálogos más recientes.'
    },
    en: {
        'about-title': 'About Us',
        'about-text1': 'At Architectural Finesse, we specialize in transforming spaces with textures and finishes that capture the essence of elegance and luxury...',
        'about-text2': 'Our mission is to push the boundaries of aesthetic excellence, embracing creative innovation and breaking free from the ordinary...',
        'about-text3': 'Welcome to a world where beauty and functionality meet, creating spaces that tell unique and sophisticated stories...',
        'estimate-title': 'Request Estimate',
        'label-name': 'Full Name:',
        'label-email': 'Email Address:',
        'label-phone': 'Phone Number:',
        'label-municipality': 'Municipality:',
        'submit': 'Send',
        'contact-title': 'Contact Us',
        'contact-text': 'Contact us through the following channels:',
        'catalog-title': 'Catalog',
        'catalog-text': 'Our catalogs are available upon request. Please contact us to receive the latest catalogs.'
    }
};

function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

function sendEstimate(event) {
    event.preventDefault();
    alert('Estimado enviado');
}
