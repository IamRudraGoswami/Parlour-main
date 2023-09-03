/*------------ SHOW MENU-------------*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    /* Check if the variables exist */
    if (toggle && nav) {
        /* Add the show-menu class to the div with the class nav__menu here */
        toggle.addEventListener('click', () => {
            /* Add the show-menu class to the div with the id nav-menu */
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav')

/*------------ REMOVE MOBILE MENU -------------*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav')
    /* When a link or the close button is clicked, remove the show-menu class */
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SET CLICKED LINK TO ACTIVE-LINK CLASS ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))
/*==================== CHANGE HEADER COLOR ====================*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header')
    if(this.scrollY >= 100) scrollHeader.classList.add('scroll-header'); else scrollHeader.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)
