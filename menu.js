let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// Abre o menu ao clicar no botão hambúrguer
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

// Fecha o menu ao clicar em qualquer item do menu
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// Fecha o menu ao clicar no overlay
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})