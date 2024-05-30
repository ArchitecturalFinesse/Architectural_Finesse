function openPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
}

document.getElementById('estimate-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const municipality = document.getElementById('municipality').value;

    // Enviar correo
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        from_phone: phone,
        municipality: municipality,
    }).then(function(response) {
        alert("Estimate request sent successfully!");
        closePopup('estimate-popup');
    }, function(error) {
        alert("There was an error sending the estimate request. Please try again.");
    });

    // Enviar mensaje a WhatsApp
    const whatsappMessage = `Estimate request from ${name}\nEmail: ${email}\nPhone: ${phone}\nMunicipality: ${municipality}`;
    window.open(`https://wa.me/19393212967?text=${encodeURIComponent(whatsappMessage)}`);
});
