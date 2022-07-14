const nav = document.querySelector('nav');

window.onload = function() {
    nav.classList.add('none')
}

const btn = document.querySelector('#but-nav-responsive');
btn.addEventListener('click', () => {
    nav.classList.toggle('none');
})