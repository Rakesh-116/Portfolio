let nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      nav.classList.add('black');
    } else {
      nav.classList.remove('black');
    }
});
  