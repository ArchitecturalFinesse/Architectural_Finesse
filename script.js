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
    
    var form = document.getElementById("estimate-form");
    var formData = new FormData(form);
    
    emailjs.sendForm("service_n8ims0n", "template_ho197gd", formData)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Tu solicitud de estimación ha sido enviada con éxito!");
            form.reset(); // Reset the form after submission
            closePopup("estimate-popup"); // Close the estimate popup after submission
        }, function(error) {
            console.error("Error al enviar el correo:", error);
            alert("Oops! Algo salió mal. Por favor, intenta de nuevo más tarde.");
        });
}

function setLanguage(language) {
    var elements = document.querySelectorAll("[data-lang]");
    elements.forEach(function(element) {
        var key = element.getAttribute("data-lang");
        element.textContent = translations[language][key];
    });
}

const translations = {
    es: {
        'about-title': 'Sobre Nosotros',
        'about-text1': 'En Architectural Finesse, nos especializamos en transformar espacios con texturas y acabados que capturan la esencia de la elegancia y el lujo. Nuestro equipo de artesanos visionarios combina una profunda comprensión de la estética arquitectónica con materiales de calidad superior para crear ambientes que inspiran y deleitan.',
        'about-text2': 'Nuestra misión es superar los límites de la excelencia estética, abrazando la innovación creativa y rompiendo con lo ordinario. Nos enorgullece nuestra atención meticulosa a los detalles, nuestro compromiso inquebrantable con la calidad y un portafolio enriquecido con inspiración cultural.',
        'about-text3': 'Bienvenidos a un mundo donde la belleza y la funcionalidad se encuentran, creando espacios que cuentan historias únicas y sofisticadas. En Architectural Finesse, hacemos de cada proyecto una obra maestra.',
        'about-us': 'Sobre Nosotros',
        'request-estimate': 'Solicitar Estimación',
        'contact-us': 'Contáctenos',
        'catalog': 'Catálogo',
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
        'about-text1': 'At Architectural Finesse, we specialize in transforming spaces with textures and finishes that capture the essence of elegance and luxury. Our team of visionary artisans combines a deep understanding of architectural aesthetics with superior quality materials to create environments that inspire and delight.',
        'about-text2': 'Our mission is to push the limits of aesthetic excellence, embracing creative innovation and breaking away from the ordinary. We take pride in our meticulous attention to detail, unwavering commitment to quality, and a portfolio enriched with cultural inspiration.',
        'about-text3': 'Welcome to a world where beauty and functionality meet, creating spaces that tell unique and sophisticated stories. At Architectural Finesse, we make every project a masterpiece.',
        'about-us': 'About Us',
        'request-estimate': 'Request Estimate',
        'contact-us': 'Contact Us',
        'catalog': 'Catalog',
        'estimate-title': 'Request Estimate',
        'label-name': 'Full Name:',
        'label-email': 'Email:',
        'label-phone': 'Phone Number:',
        'label-municipality': 'Municipality:',
        'submit': 'Submit',
        'contact-title': 'Contact Us',
        'contact-text': 'Contact us through the following channels:',
        'catalog-title': 'Catalog',
        'catalog-text': 'Our catalogs are available upon request. Please contact us to receive the latest catalogs.'
    }
};

// Set initial language to Spanish
setLanguage('es');
