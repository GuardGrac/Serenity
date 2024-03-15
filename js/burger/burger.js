const menu = document.querySelector('#menu')
const navToggleMenu = document.querySelector('.nav__toggle-menu')
const links = document.querySelectorAll('.links')
const body2 = document.body;


navToggleMenu.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        body2.classList.remove("nav-up")
        menu.classList.remove('open') 
        navToggleMenu.classList.remove('active')
    }
    else {
        body2.classList.add("nav-up")
        menu.classList.add('open')
        navToggleMenu.classList.add('active')
    }
})

Array.from(links).forEach(e => {
    e.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open') 
            navToggleMenu.classList.remove('active')
            body2.classList.remove("nav-up")
        }
        else {
            body2.classList.add("nav-up")
            menu.classList.add('open')
            navToggleMenu.classList.add('active')
        }      
    })
})