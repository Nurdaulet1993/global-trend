

document.querySelectorAll('.header__nav .nav__link').forEach(element => {
    element.onclick = function() {
        document.querySelector('.header__nav .nav__link.active').classList.remove('active');
        this.classList.add('active');
    }   
});

const   block = document.createElement('a');
        block.className = "scroll-top";
        block.href = "#hero";
        block.innerHTML = "<i class='fas fa-arrow-up'></i>";
        document.querySelector('body').appendChild(block);


window.onscroll = function() {scrollFunction(); scroll();};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.header').classList.add('scroll');

  } else {
    document.querySelector('.header').classList.remove('scroll')
  }
}

  
let x = window.matchMedia("(max-width: 900px)");
mq(x);
x.addListener(mq);

function mq(x) {
    if (x.matches) {

        let block = document.createElement('div');
        block.className="header__collapse";
        block.appendChild(document.querySelector('nav'));
        document.querySelector('.header .container').appendChild(block);

        document.querySelector('.header__toggler').onclick = function() {
        document.querySelector('.header .container').classList.toggle('show');
      }

    } else {
        document.querySelector('.header__navbar').appendChild(document.querySelector('nav'));
        $('.header__collapse').remove();
    }
}

// Плавная прокрутка
let $page = $('html, body');

$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 78
    }, 400);
    $('.header .container').removeClass('show');
    return false;
});


// Меняет активные линки при прокрутке
jQuery(window).scroll(function(){

    let $sections = $('section');

    $sections.each(function(i,el){
        let top  = $(el).offset().top-100;
        let bottom = top +$(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr('id');

        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});
