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
            alert("¡Tu solicitud de estimado ha sido enviada con éxito!");
            form.reset(); // Resetea el formulario después del envío
            closePopup("estimate-popup"); // Cierra el popup después del envío
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("¡Ups! Algo salió mal. Por favor intenta de nuevo más tarde.");
        });
}

function changeLanguage(language) {
    document.querySelectorAll("[data-lang]").forEach(function(element) {
        element.style.display = element.getAttribute("data-lang") === language ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("english-btn").addEventListener("click", function() {
        changeLanguage("en");
    });
    document.getElementById("spanish-btn").addEventListener("click", function() {
        changeLanguage("es");
    });

    // Set default language
    changeLanguage("es");
});
