const header = document.querySelector("header");

/* Sticky NavBar */
function stickyNavbar()
{
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* Animação */

let sr = ScrollReveal ({
    duration: 2500,
    distance: "60px"
})