document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById("contact-form"); // Cast as HTMLFormElement
    var popup = document.getElementById("popup");
    var closePopupButton = document.getElementById("close-popup");
    // Show popup function
    function showPopup() {
        if (popup) {
            popup.classList.add("active"); // Show the popup
        }
    }
    // Hide popup function
    function hidePopup() {
        if (popup) {
            popup.classList.remove("active"); // Hide the popup
        }
    }
    // Form submission logic
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            showPopup(); // Show the popup
            contactForm.reset(); // Reset the form (now works correctly)
        });
    }
    // Close popup logic
    if (closePopupButton) {
        closePopupButton.addEventListener("click", hidePopup);
    }
});
