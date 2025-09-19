document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".hamburger-toggle");
    const menu = document.querySelector(".hamburger-menu");

    if (toggle) {
        toggle.addEventListener("click", () => {
        menu.classList.toggle("open");
        });
    }
});