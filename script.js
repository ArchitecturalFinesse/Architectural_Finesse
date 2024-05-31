function openPopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "flex";
}

function closePopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "none";
}

function sendEstimate(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    emailjs.sendForm("service_n8ims0n", "template_ho197gd", form)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Tu solicitud de estimación ha sido enviada exitosamente!");
            form.reset();
            closePopup(form.closest(".popup").id);
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("¡Vaya! Algo salió mal. Por favor, inténtalo de nuevo más tarde.");
        });
}

function openSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function setLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        element.textContent = translations[lang][element.getAttribute('data-lang')];
    });
}

const translations = {
    es: {
        'about-title': 'Sobre Nosotros',
        'about-text1': 'En Architectural Finesse, nos especializamos en transformar espacios con texturas y acabados que capturan la esencia de la elegancia y el lujo...',
        'about-text2': 'Nuestra misión es superar los límites de la excelencia estética, abrazando la innovación creativa y rompiendo con lo ordinario...',
        'about-text3': 'Bienvenidos a un mundo donde la belleza y la funcionalidad se encuentran, creando espacios que cuentan historias únicas y sofisticadas...',
        'estimate-title': 'Solicitar Estimación',
        'label-name': 'Nombre Completo:',
        'label-email': 'Correo Electrónico:',
        'label-phone': 'Número de Teléfono:',
        'label-municipality': 'Municipio:',
        'submit': 'Enviar',
        'contact-title': 'Contáctenos',
        'contact-text': 'Contáctenos a través de los siguientes canales:',
        'catalog-title': 'Catálogo',
        'catalog-text': 'Nuestros catálogos están disponibles a pedido. Por favor contáctenos para recibir los catálogos más recientes.'
    },
    en: {
        'about-title': 'About Us',
        'about-text1': 'At Architectural Finesse, we specialize in transforming spaces with textures and finishes that capture the essence of elegance and luxury...',
        'about-text2': 'Our mission is to push the boundaries of aesthetic excellence, embracing creative innovation and breaking from the ordinary...',
        'about-text3': 'Welcome to a world where beauty and functionality meet, creating spaces that tell unique and sophisticated stories...',
        'estimate-title': 'Request Estimate',
        'label-name': 'Full Name:',
        'label-email': 'Email Address:',
        'label-phone': 'Phone Number:',
        'label-municipality': 'Municipality:',
        'submit': 'Submit',
        'contact-title': 'Contact Us',
        'contact-text': 'Contact us through the following channels:',
        'catalog-title': 'Catalog',
        'catalog-text': 'Our catalogs are available upon request. Please contact us to receive the latest catalogs.'
    }
};
