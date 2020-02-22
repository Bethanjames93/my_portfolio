const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-items");
    const navItems = document.querySelectorAll(".nav-items li");

    burger.addEventListener("click",() => {
        nav.classList.toggle("nav-active");
    });

    navItems.forEach((items, index) => {
        items.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    });

}
navSlide();