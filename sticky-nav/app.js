const nav = document.querySelector('#main');
const navTop = nav.offsetTop;
function fixNav() {
    if (window.scrollY >= navTop) {
        console.log('it is')
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = nav.offsetHeight + 'px';

    } else {
        console.log("isn't");
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
window.addEventListener('scroll', fixNav);