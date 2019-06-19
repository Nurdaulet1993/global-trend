// window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.querySelector('.scroll-top').classList.add('show');
  } else {
    document.querySelector('.scroll-top').classList.remove('show');
  }
}