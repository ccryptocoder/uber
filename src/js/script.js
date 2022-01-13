window.addEventListener('DOMContentLoaded', () => {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.menu');
    let menuItem = Array.from(document.querySelectorAll('.menu_item'));

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active')
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active')
        })
    })
})