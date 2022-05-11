const hambuger = document.querySelector('.hamburgerMenu');
const closeBtn = document.querySelector('.closeBtn')
const nav = document.querySelector('.navUl')
const section = document.querySelector('.section')
const aside = document.querySelector('.aside')
const footer = document.querySelector('.footer')

hambuger.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)

function openMenu() {
    nav.classList.add('show')
    section.classList.add('hide')
    aside.classList.add('hide')
    footer.classList.add('hide')
}
function closeMenu() {
    nav.classList.remove('show')
    section.classList.remove('hide')
    aside.classList.remove('hide')
    footer.classList.remove('hide')
}