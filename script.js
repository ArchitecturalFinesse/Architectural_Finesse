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
            alert("¡Su solicitud de estimado ha sido enviada con éxito!");
            form.reset(); // Reset the form after submission
            closePopup("estimate-popup"); // Close the estimate popup after submission
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("¡Vaya! Algo salió mal. Por favor, intente de nuevo más tarde.");
        });
}

// Ensuring the Sharki dropdown only appears if Sharki is selected
document.getElementById('product').addEventListener('change', function() {
    var sharkiDropdown = document.getElementById('sharki');
    if (this.value === 'Sharki') {
        sharkiDropdown.style.display = 'block';
    } else {
        sharkiDropdown.style.display = 'none';
    }
});
