document.addEventListener("DOMContentLoaded", function () {
    // Function to open a popup
    function openPopup(id) {
        var popup = document.getElementById(id);
        popup.style.display = "flex"; // Use "flex" to display the popup as a flex container
    }

    // Function to close a popup
    function closePopup(id) {
        var popup = document.getElementById(id);
        popup.style.display = "none";
    }

    // Function to handle the contact form submission
    function sendContact(event) {
        event.preventDefault();

        var form = document.getElementById("contact-form");
        var formData = new FormData(form);

        emailjs.sendForm("service_n8ims0n", "template_ho197gd", formData)
            .then(function (response) {
                console.log("Email sent successfully:", response);
                alert("Su mensaje ha sido enviado exitosamente.");
                form.reset(); // Reset the form after submission
                closePopup("contact-popup"); // Close the contact popup after submission
            }, function (error) {
                console.error("Email sending failed:", error);
                alert("¡Oops! Algo salió mal. Por favor, inténtelo de nuevo más tarde.");
            });
    }

    // Add event listener for the contact form submission
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", sendContact);
    }

    // Add event listeners to open and close popups
    var openPopupButtons = document.querySelectorAll("[onclick^='openPopup']");
    openPopupButtons.forEach(function (button) {
        var popupId = button.getAttribute("onclick").match(/'([^']+)'/)[1];
        button.addEventListener("click", function () {
            openPopup(popupId);
        });
    });

    var closePopupButtons = document.querySelectorAll(".popup-content .close");
    closePopupButtons.forEach(function (button) {
        var popupId = button.closest(".popup").id;
        button.addEventListener("click", function () {
            closePopup(popupId);
        });
    });
});
