// ==================================================
// MOBILE MENU
// ==================================================

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


// ==================================================
// CLOSE MOBILE MENU
// ==================================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});


// ==================================================
// CONTACT FORM
// ==================================================

const contactForm =
    document.getElementById("contactForm");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function(event) {

            // Stop normal form submission
            event.preventDefault();


            // Get form values
            const name =
                document.getElementById("name")
                .value
                .trim();

            const email =
                document.getElementById("email")
                .value
                .trim();

            const message =
                document.getElementById("message")
                .value
                .trim();


            // Validate fields
            if (!name || !email || !message) {

                formStatus.textContent =
                    "Please fill in all fields.";

                return;
            }


            // Show sending message
            formStatus.textContent =
                "Sending message...";


            try {

                // Send data to Spring Boot backend
                const response = await fetch(
                    "https://portfolio-backend-z3z0.onrender.com/api/contact",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({

                            name: name,

                            email: email,

                            message: message

                        })
                    }
                );


                // Check response
                if (response.ok) {

                    formStatus.textContent =
                        "Message sent successfully!";

                    // Clear form
                    contactForm.reset();

                } else {

                    formStatus.textContent =
                        "Failed to send message. Please try again.";

                }


            } catch (error) {

                console.error(
                    "Error connecting to backend:",
                    error
                );

                formStatus.textContent =
                    "Unable to connect to the server.";

            }

        }
    );

}