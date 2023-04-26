let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
var section = document.querySelectorAll('section')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

for (let i = 0; i < section.length; i++) {
    section[i].onclick = () => {
        menu.classList.remove('fa-times')
        navbar.classList.remove('active')
    }
}