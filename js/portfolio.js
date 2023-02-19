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

