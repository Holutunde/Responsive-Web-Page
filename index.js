let btn=document.querySelector('.btn')
let navlinks = document.querySelector('.navlinks')

btn.addEventListener('click', () => {
    navlinks.classList.toggle('active')
})