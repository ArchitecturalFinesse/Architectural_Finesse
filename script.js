function openPopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = "flex"; // Use flex to center the content
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
            alert("¡Tu solicitud de estimación ha sido enviada exitosamente!");
            form.reset
