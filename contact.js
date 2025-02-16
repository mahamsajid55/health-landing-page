document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get Form Values
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        // Simple Validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }

        // Show Confirmation
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Reset Form
        form.reset();
    });
});
