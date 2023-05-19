document.addEventListener('DOMContentLoaded', () => {
    let btnBurgerMenu = document.querySelector('.humburger-menu'),
        burgerMenuElem = document.querySelector('.menu');

    function toggleMenu() {
        burgerMenuElem.classList.toggle('menu-active');
        btnBurgerMenu.classList.toggle('humburger-menu-active');
    }

    btnBurgerMenu.addEventListener('click', toggleMenu);
    burgerMenuElem.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-list__link')) toggleMenu();
    });
});