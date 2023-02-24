jQuery(document).ready(function ($) {
  //Toggle nav meny on button click
  var $root = $('html, body'),
    menu_toggle = $('.menu-toggle');

  menu_toggle.on('click', function () {
    var $this = $(this);

    $this.toggleClass('close');
    $('.menu, .menu-nav, .menu-nav-item').toggleClass('show');
  });

  //Handle menu scrolling
  $('.menu-nav-item a').on('click', function () {
    var $this = $(this),
      href = $this.attr('href');


    //close menu after clicking
    menu_toggle.removeClass('close');
    $this.parents('.menu-nav-item, .menu-nav, .menu').removeClass('show');

    //Smooth Scrolling
    $root.animate({
      scrollTop: $(href).offset().top - 100
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });
});



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

}




let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slides2");
  let dots = document.getElementsByClassName("demo2");

  if (n > slides.length) { slideIndex2 = 1 }
  if (n < 1) { slideIndex2 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}


let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("slides3");
  let dots = document.getElementsByClassName("demo3");

  if (n > slides.length) { slideIndex3 = 1 }
  if (n < 1) { slideIndex3 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}

let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
  showSlides4(slideIndex4 += n);
}
function currentSlide4(n) {
  showSlides4(slideIndex4 = n);
}


function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("slides4");
  let dots = document.getElementsByClassName("demo4");

  if (n > slides.length) { slideIndex4 = 1 }
  if (n < 1) { slideIndex4 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex4 - 1].style.display = "block";
  dots[slideIndex4 - 1].className += " active";
}