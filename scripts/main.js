window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    const logo = document.querySelector(".logo");
    const links = document.querySelectorAll(".nav-a");

    if (window.scrollY > 20) {
        header.classList.add("scrolled");
        logo.classList.add("scrolled");
        links.forEach(a => a.classList.add("scrolled"));
    } else {
        header.classList.remove("scrolled");
        logo.classList.remove("scrolled");
        links.forEach(a => a.classList.remove("scrolled"));
    }
});