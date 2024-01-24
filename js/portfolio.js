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


let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
  showSlides5(slideIndex5 += n);
}
function currentSlide5(n) {
  showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
  let i;
  let slides = document.getElementsByClassName("slides5");
  let dots = document.getElementsByClassName("demo5");

  if (n > slides.length) { slideIndex5 = 1 }
  if (n < 1) { slideIndex5 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex5 - 1].style.display = "block";
  dots[slideIndex5 - 1].className += " active";
}



let slideIndex6 = 1;
showSlides6(slideIndex6);
function plusSlides6(n) {
  showSlides6(slideIndex6 += n);
}
function currentSlide6(n) {
  showSlides6(slideIndex6 = n);
}
function showSlides6(n) {
  let i;
  let slides = document.getElementsByClassName("slides6");
  let dots = document.getElementsByClassName("demo6");

  if (n > slides.length) { slideIndex6 = 1 }
  if (n < 1) { slideIndex6 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex6 - 1].style.display = "block";
  dots[slideIndex6 - 1].className += " active";
}



let slideIndex7 = 1;
showSlides7(slideIndex7);
function plusSlides7(n) {
  showSlides7(slideIndex7 += n);
}
function currentSlide7(n) {
  showSlides7(slideIndex7 = n);
}
function showSlides7(n) {
  let i;
  let slides = document.getElementsByClassName("slides7");
  let dots = document.getElementsByClassName("demo7");

  if (n > slides.length) { slideIndex7 = 1 }
  if (n < 1) { slideIndex7 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex7 - 1].style.display = "block";
  dots[slideIndex7 - 1].className += " active";
}


let slideIndex8 = 1;
showSlides8(slideIndex8);
function plusSlides8(n) {
  showSlides8(slideIndex8 += n);
}
function currentSlide8(n) {
  showSlides8(slideIndex8 = n);
}
function showSlides8(n) {
  let i;
  let slides = document.getElementsByClassName("slides8");
  let dots = document.getElementsByClassName("demo8");

  if (n > slides.length) { slideIndex8 = 1 }
  if (n < 1) { slideIndex8 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex8 - 1].style.display = "block";
  dots[slideIndex8 - 1].className += " active";
}

let slideIndex9 = 1;
showSlides9(slideIndex9);
function plusSlides9(n) {
  showSlides9(slideIndex9 += n);
}
function currentSlide9(n) {
  showSlides9(slideIndex9 = n);
}
function showSlides9(n) {
  let i;
  let slides = document.getElementsByClassName("slides9");
  let dots = document.getElementsByClassName("demo9");

  if (n > slides.length) { slideIndex9 = 1 }
  if (n < 1) { slideIndex9 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex9 - 1].style.display = "block";
  dots[slideIndex9 - 1].className += " active";
}