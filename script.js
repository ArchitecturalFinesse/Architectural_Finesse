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
            alert("Your estimate request has been sent successfully!");
            form.reset(); // Reset the form after submission
            closePopup("estimate-popup"); // Close the estimate popup after submission
        }, function(error) {
            console.error("Email sending failed:", error);
            alert("Oops! Something went wrong. Please try again later.");
        });
}
