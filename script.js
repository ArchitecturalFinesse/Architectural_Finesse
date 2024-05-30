function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function sendEstimate(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const municipality = document.getElementById('municipality').value;

    emailjs.send("service_n8ims0n", "template_ho197gd", {
        from_name: name,
        from_email: email,
        from_phone: phone,
        municipality: municipality
    }).then(function(response) {
        alert("Estimate request sent successfully!");
        closePopup('estimate-popup');
    }, function(error) {
        alert("There was an error sending the estimate request. Please try again.");
    });
}
