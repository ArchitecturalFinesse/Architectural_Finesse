document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de EmailJS
    emailjs.init("yvbeLgm4MGWDlW8Tp"); // Tu Public Key de EmailJS

    // Funciones para abrir y cerrar popups
    function openPopup(id) {
        var popup = document.getElementById(id);
        popup.style.display = "block";
    }

    function closePopup(id) {
        var popup = document.getElementById(id);
        popup.style.display = "none";
    }

    // Gestión de idioma
    function changeLanguage(language) {
        if (language === 'es') {
            window.location.href = "index.html"; // Página en español
        } else if (language === 'en') {
            window.location.href = "index_en.html"; // Página en inglés
        }
    }

    // Envío del formulario de estimado
    function sendEstimate(event) {
        event.preventDefault();
        
        var form = document.getElementById("estimate-form");
        var formData = new FormData(form);
        
        emailjs.sendForm("service_n8ims0n", "template_ho197gd", formData)
            .then(function(response) {
                console.log("Email sent successfully:", response);
                alert("Your estimate request has been sent successfully!");
                form.reset(); // Reset the form after submission
                closePopup("estimate-popup"); // Close the estimate popup after submission
            }, function(error) {
                console.error("Email sending failed:", error);
                alert("Oops! Something went wrong. Please try again later.");
            });
    }

    // Eventos para los botones de abrir y cerrar popups
    document.querySelectorAll('.btn').forEach(function(button) {
        button.addEventListener('click', function() {
            var target = button.getAttribute('data-target');
            openPopup(target);
        });
    });

    document.querySelectorAll('.close').forEach(function(span) {
        span.addEventListener('click', function() {
            var popup = span.closest('.popup');
            popup.style.display = "none";
        });
    });

    // Evento para el formulario de estimado
    document.getElementById('estimate-form').addEventListener('submit', sendEstimate);

    // Gestión del dropdown de productos
    var productSelect = document.getElementById('product');
    var sharkiOptions = document.getElementById('sharki-options');
    
    productSelect.addEventListener('change', function() {
        if (productSelect.value === 'Sharki') {
            sharkiOptions.style.display = 'block';
        } else {
            sharkiOptions.style.display = 'none';
        }
    });
});
