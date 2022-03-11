const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', function() {
    this.classList.toggle("is-active");

    const visibility = navMenu.getAttribute("data-visible");
    if (visibility === "false") {
        navMenu.setAttribute("data-visible", true);
        hamburger.setAttribute("aria-expanded", true)
    } else {
        navMenu.setAttribute("data-visible", false)
        hamburger.setAttribute("aria-expanded", false)
    }
});

