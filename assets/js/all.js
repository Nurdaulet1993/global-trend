"use strict";document.querySelectorAll(".for-whom__btn").forEach(function(e){e.addEventListener("click",function(){var e=getComputedStyle(this.parentNode.parentNode.querySelector(".for-whom__wrap"));console.log(e.height),this.parentNode.parentNode.querySelector(".for-whom__collapse").classList.toggle("show"),this.parentNode.parentNode.querySelector(".for-whom__collapse").className.includes("show")?this.parentNode.parentNode.querySelector(".for-whom__collapse").style.height=e.height:this.parentNode.parentNode.querySelector(".for-whom__collapse").style.height="0px"})}),document.querySelectorAll(".form-group__input").forEach(function(e){e.addEventListener("focus",function(){this.parentNode.classList.add("active")}),e.onblur=function(){this.parentNode.classList.remove("active")},e.onpaste=function(){this.value.style.fontSize="14px",this.value.style.height="14px",this.value.style.color="red"}}),document.querySelectorAll(".header__nav .nav__link").forEach(function(e){e.onclick=function(){document.querySelector(".header__nav .nav__link.active").classList.remove("active"),this.classList.add("active")}}),window.onscroll=function(){80<document.body.scrollTop||80<document.documentElement.scrollTop?document.querySelector(".header").classList.add("scroll"):document.querySelector(".header").classList.remove("scroll")};var e=window.matchMedia("(max-width: 900px)");function o(e){if(e.matches){var o=document.createElement("div");o.className="header__collapse",o.appendChild(document.querySelector("nav")),document.querySelector(".header .container").appendChild(o),document.querySelector(".header__toggler").onclick=function(){document.querySelector(".header .container").classList.toggle("show")}}else document.querySelector(".header__navbar").appendChild(document.querySelector("nav")),$(".header__collapse").remove()}o(e),e.addListener(o);var t=$("html, body");$('a[href*="#"]').click(function(){return t.animate({scrollTop:$($.attr(this,"href")).offset().top},400),$(".header .container").removeClass("show"),!1}),jQuery(window).scroll(function(){$("section").each(function(e,o){var t=$(o).offset().top-100,r=t+$(o).height(),a=$(window).scrollTop(),n=$(o).attr("id");t<a&&a<r&&($("a.active").removeClass("active"),$('a[href="#'+n+'"]').addClass("active"))})});$(window).width();$(".hero").mousemove(function(e){var o=.1*($(window).width()/2-e.pageX),t=.1*($(window).height()/2-e.pageY);$(".hero .animate").css("margin-left",o+"px"),$(".hero .animate").css("margin-bottom",t+"px")}),$(document).ready(function(){$(".owl-carousel").owlCarousel({autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0}}})});