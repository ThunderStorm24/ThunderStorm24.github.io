window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("stickyy", window.scrollY > 100); // Zamkniecie nawiasu na końcu linii
});
