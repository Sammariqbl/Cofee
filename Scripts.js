// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Toggle menu on small screens
    document.getElementById('menu-btn').addEventListener('click', function() {
        var navbar = document.querySelector('.header .navbar');
        navbar.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('.navbar a[href^="#"]');
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    const name = document.querySelector('input[name="name"]').value.trim();
    const guests = document.querySelector('input[name="guests"]').value.trim();
    const number = document.querySelector('input[name="number"]').value.trim();

    if (name === '' || guests === '' || number === '') {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in all fields.');
    }
});