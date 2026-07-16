

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});