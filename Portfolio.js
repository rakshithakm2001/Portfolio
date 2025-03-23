let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

function changeSlide(index) {
    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));
    // Remove active class from all dots
    dots.forEach((dot) => dot.classList.remove("active"));

    // Show the selected slide
    slides[index].classList.add("active");
    // Activate the selected dot
    dots[index].classList.add("active");
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    
    if (email && subject && message) {
        alert("Message Sent Successfully!");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill all fields.");
    }
});

