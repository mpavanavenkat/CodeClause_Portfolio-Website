// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  for (let anchor of anchorLinks) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});

// Form submission handling
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    
    // Simulating form submission
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Message:", messageInput.value);
    
    // Resetting form fields
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    
    // Displaying a success message
    const successMessage = document.createElement("p");
    successMessage.textContent = "Message sent successfully!";
    successMessage.style.color = "green";
    contactForm.appendChild(successMessage);
  });
});
