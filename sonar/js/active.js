(function ($) {
    'use strict';


    var $window = $(window);

    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            window.onbeforeunload = function() {window.scrollTo(0,0);}
            $(this).remove();
        });
    });

    // :: Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: Sticky Active Code
    $(function(){
        if($('body').is('.contactPage') || $('body').is('.portfolioPage')){
            $('.header-area').addClass('sticky');
            $('.logo-area').addClass('sticky');
            document.getElementById("colorSwitchSocial1").style.color = "white";
            document.getElementById("colorSwitchSocial2").style.color = "white";
            $(document).ready(function(){
                setTimeout(function(){
                    $('.navbar-toggler-icon').addClass('sticky');
                }, 150);    // Delay for 5 seconds
            });
        } else {
            $window.on('scroll', function () {
                if ($window.scrollTop() > 0) {
                    $('.header-area').addClass('sticky');
                    $('.logo-area').addClass('sticky');
                    document.getElementById("colorSwitchSocial1").style.color = "white";
                    document.getElementById("colorSwitchSocial2").style.color = "white";
                    $(document).ready(function(){
                        setTimeout(function(){
                            $('.navbar-toggler-icon').addClass('sticky');
                        }, 150);    // Delay for 5 seconds
                    });
                } else {
                    $('.header-area').removeClass('sticky');
                    $('.logo-area').removeClass('sticky');
                    document.getElementById("colorSwitchSocial1").style.color = "#212529";
                    document.getElementById("colorSwitchSocial2").style.color = "#212529";
                    $(document).ready(function(){
                        setTimeout(function(){
                            $('.navbar-toggler-icon').removeClass('sticky');
                        }, 150);    // Delay for 5 seconds
                    });
                }
            });
        }
    });



    // :: Menu Active Code
    $('#menuIcon').on('click', function () {
        $('body').toggleClass('menu-open');
    });
    $('.closeIcon').on('click', function () {
        $('body').removeClass('menu-open');
    });

    // :: Tooltip Active Code
    $('[data-toggle="tooltip"]').tooltip()

    // :: Nicescroll Active Code
    if ($.fn.niceScroll) {
        $("body, textarea").niceScroll({
            cursorcolor: "#151515",
            cursorwidth: "6px",
            background: "#f0f0f0"
        });
    }


    // :: Progress Bar Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#1d1d1d',
            animateOnResize: true
        });
    }

    // :: Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // :: Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.sonar-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.sonar-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // :: Magnific Popup Active Code
    if ($.fn.magnificPopup) {
        $('.gallery-img').magnificPopup({
            type: 'image'
        });
    }

    // :: MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.equalize').matchHeight({
            byRow: true,
            property: 'height'
        });
    }

    // :: CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("#scrollDown").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    })
})(jQuery);