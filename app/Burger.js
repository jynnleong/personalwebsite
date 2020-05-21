const burgerSlide = () => {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const menu_links = document.querySelectorAll(".menu-links");

    burger.addEventListener("click", () => {
        menu.classList.toggle("menu-active");

        //Burger Animation
        burger.classList.toggle("toggle");
    });
}

burgerSlide();