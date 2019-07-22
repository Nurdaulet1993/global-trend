"use strict";

document.querySelectorAll('.call-to-action form').forEach(function (item) {
  item.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = this.querySelector('input[name="name"]').value;
    var email = this.querySelector('input[name="email"]').value;
    var phone = this.querySelector('input[name="phone"]').value;

    if (name.length == 0 || email.length == 0 || phone.length == 0) {
      var warning = document.createElement('div');
      warning.className = "warning";
      warning.innerText = "Вы не заполнили все поля!";
      this.appendChild(warning);
      setTimeout(function () {
        document.querySelector('.warning').remove();
      }, 2000);
    } else {
      this.setAttribute('action', './mail.php');
      this.setAttribute('method', 'POST');
      this.submit();
    }
  });
});
document.querySelectorAll('.for-whom__btn').forEach(function (item) {
  item.addEventListener('click', function () {
    var block = getComputedStyle(this.parentNode.parentNode.querySelector('.for-whom__wrap'));
    console.log(block.height);
    this.parentNode.parentNode.querySelector('.for-whom__collapse').classList.toggle('show');
    this.parentNode.parentNode.querySelector('.for-whom__collapse').className.includes('show') ? this.parentNode.parentNode.querySelector('.for-whom__collapse').style.height = block.height : this.parentNode.parentNode.querySelector('.for-whom__collapse').style.height = '0px';
  });
});
document.querySelectorAll('.form-group__input').forEach(function (item) {
  item.addEventListener('focus', function () {
    this.parentNode.classList.add('active');
  });

  item.onblur = function () {
    this.parentNode.classList.remove('active');
  };

  item.onpaste = function () {
    this.value.style.fontSize = "14px";
    this.value.style.height = "14px";
    this.value.style.color = "red";
  };
});
document.querySelectorAll('.header__nav .nav__link').forEach(function (element) {
  element.onclick = function () {
    document.querySelector('.header__nav .nav__link.active').classList.remove('active');
    this.classList.add('active');
  };
});
var block = document.createElement('a');
block.className = "scroll-top";
block.href = "#hero";
block.innerHTML = "<i class='fas fa-arrow-up'></i>";
document.querySelector('body').appendChild(block);

window.onscroll = function () {
  scrollFunction();
  scroll();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('.header').classList.add('scroll');
  } else {
    document.querySelector('.header').classList.remove('scroll');
  }
}

var x = window.matchMedia("(max-width: 1140px)");
mq(x);
x.addListener(mq);

function mq(x) {
  if (x.matches) {
    var _block = document.createElement('div');

    _block.className = "header__collapse";

    _block.appendChild(document.querySelector('nav'));

    document.querySelector('.header .container').appendChild(_block);
    var widgets = document.createElement('div');
    widgets.innerHTML = "\n            <div class=\"widget-group\">\n                <a href=\"tel:+77784097967\" class = \"btn-widget\">\n                    <i class=\"fas fa-phone-volume\"></i>\n                    +7 778 409 79 67\n                </a>\n\n                <a href=\"https://wa.me/77784097967\" class = \"btn-widget\">\n                    <i class=\"fab fa-whatsapp\"></i>\n                    \u041D\u0430\u043F\u0438\u0448\u0438 \u043C\u043D\u0435\n                </a>\n            </div>\n        ";

    _block.appendChild(widgets);

    document.querySelector('.header__toggler').onclick = function () {
      document.querySelector('.header .container').classList.toggle('show');
    };
  } else {
    document.querySelector('.header__navbar').appendChild(document.querySelector('nav'));
    $('.header__collapse').remove();
  }
} // Плавная прокрутка


var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 78
  }, 400);
  $('.header .container').removeClass('show');
  return false;
}); // Меняет активные линки при прокрутке

jQuery(window).scroll(function () {
  var $sections = $('section');
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 100;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');

    if (scroll > top && scroll < bottom) {
      $('a.active').removeClass('active');
      $('a[href="#' + id + '"]').addClass('active');
    }
  });
});
var windowWidth = $(window).width(); // $('.hero').mousemove(function(event){
//     let moveX = (($(window).width() / 2) - event.pageX) * 0.1;
//     let moveY = (($(window).height() / 2) - event.pageY) * 0.1;
//     $('.hero .animate').css('margin-left', moveX + 'px');
//     $('.hero .animate').css('margin-bottom', moveY + 'px');
// })

document.querySelectorAll('.modal-group__input').forEach(function (item) {
  item.addEventListener('focus', function () {
    this.parentNode.classList.add('active');
  });

  item.onblur = function () {
    this.parentNode.classList.remove('active');
  };

  item.onpaste = function () {
    this.value.style.fontSize = "14px";
    this.value.style.height = "14px";
    this.value.style.color = "red";
  };
});
document.querySelectorAll('.modal').forEach(function (item) {
  item.onclick = function () {
    document.querySelector(this.getAttribute('href')).classList.add('show');

    document.querySelector('.modal-window').onclick = function (e) {
      if (e.target == document.querySelector('.modal-window')) {
        document.querySelector('.modal-window').classList.remove('show');
      }
    };
  };
}); // window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.querySelector('.scroll-top').classList.add('show');
  } else {
    document.querySelector('.scroll-top').classList.remove('show');
  }
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      593: {
        items: 1,
        nav: true
      }
    }
  });
});
$(document).ready(function () {
  // Sorry about bad spacing. Also...this is jquery if you didn't notice allready.
  $(".widget.phone").hover(function () {
    $(this).css('width', '220px');
  }, function () {
    $(this).css('width', '0px');
  });
  $(".widget.whatsapp").hover(function () {
    $(this).css('width', '160px');
  }, function () {
    $(this).css('width', '0px');
  });
});