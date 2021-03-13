import * as $ from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '@scss/main.scss'
import 'owl.carousel'

$(function() {

    $(document).ready(function() {

        //preloader
        setTimeout(function() {
            let preloader = $('#page-preloader');
            if ( !preloader.hasClass('done') ) {
                preloader.addClass('done');
            }
        }, 1000);

        //mobile menu expand
        $('.header').on('click', '.header__nav-toggle', function(){
            let header_menu = $(this).closest('.header').find('.header-menu');
            if ( $('.header').hasClass('expand') ) {
                header_menu.slideUp(300);
                setTimeout(function() {
                    $('.header').removeClass('expand');
                }, 300);
            } else {
                header_menu.slideDown(300);
                $('.header').addClass('expand');
            }
        });

        //upload photo
        $('.custom-file-input').on('change', function(){
            let imageUrl = 'img/photos/ava.png';
            $('.profile-photo').css('background-image', 'url(' + imageUrl + ')');
        });

        //gallery on desktop
        $('.user-profile-gallery').on('click', '.user-profile-gallery__item', function(){
            let url = $(this).css('background-image');
            url = url.replace('url(','').replace('-heart','').replace(')','').replace(/\"/gi, '');
            $('.user-profile-photo').css('background-image', 'url(' + url + ')');
        });

        //slider (Profile gallery) for mobile
        $('.owl-carousel.user-profile-slider').owlCarousel({
            items: 1,
            dots: false
        });

        //slider for SignUp/Login pages
        // $('.owl-carousel.user-list-slider-login').owlCarousel({
        //     loop: true,
        //     dots: false,
        //     items: 2,
        //     margin: 30,
        //     autoWidth: true,
        //     responsive:{
        //         768:{
        //             margin: 30
        //         },
        //         992:{
        //             margin: 60
        //         },
        //         1200:{
        //             margin: 0
        //         }
        //     }
        // });

        //custom sliders
        owlInit('.user-list-slider-login');

    });

    //init owl carousel for custom screen width
    function owlInit(el_class) {
        if (window.innerWidth > 1200) {
            $(el_class).addClass('owl-carousel');
            $('.owl-carousel' + el_class).owlCarousel({
                loop: false,
                items: 2,
                margin: 0,
                autoWidth: true,
                responsive:{
                    768:{
                        margin: 30
                    },
                    992:{
                        margin: 60
                    },
                    1200:{
                        margin: 50
                    },
                    1500:{
                        margin: 96
                    },
                }
            });
        } else {
            $('.owl-carousel' + el_class).owlCarousel('destroy');
            $(el_class).removeClass('owl-carousel');
        }
    }

    $(window).resize(function() {
        owlInit('.user-list-slider-login');
    });

});