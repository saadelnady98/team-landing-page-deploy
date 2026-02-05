/*
* ----------------------------------------------------------------------------------------
Author       : Tanvir Hossain
Template Name: Noir - Premium Portfolio Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/


(function ($) {
    "use strict";


    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */

    function scrollNav() {
        $('.onepage li a').click(function () {
            $(".onepage li a.active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 100
            }, 1000);
            return false;
        });
    }
    scrollNav();

    /*
     * ----------------------------------------------------------------------------------------
     *  SCROOL TO UP JS
     * ----------------------------------------------------------------------------------------
     */

    var progressPath = document.querySelector('.progress-wrap path');
    if (progressPath) {
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();

        $(window).scroll(updateProgress);
        var offset = 150;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
    }

    /* ==========================================================================
                       SCROLLER ANIMATION
    ========================================================================== */

    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });
    }

    // ## WOW Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            if (windowpos >= 100) {
                siteHeader.addClass('fixed-header');
            } else {
                siteHeader.removeClass('fixed-header');
            }
        }
    });


    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {
        const svg = document.getElementById("preloaderSvg");
        const preloader = document.querySelector(".preloader");

        if (svg && preloader) {
            const tl = gsap.timeline();
            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

            // Function to hide preloader
            const hidePreloader = () => {
                if (preloader.classList.contains('loaded')) return;
                preloader.classList.add('loaded'); // Mark as loaded so we don't run twice

                tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
                    delay: 0.2, // Reduced delay for faster perception
                    y: -100,
                    opacity: 0,
                });
                tl.to(svg, {
                    duration: 0.5,
                    attr: { d: curve },
                    ease: "power2.easeIn",
                }).to(svg, {
                    duration: 0.5,
                    attr: { d: flat },
                    ease: "power2.easeOut",
                });
                tl.to(preloader, {
                    y: -1500,
                });
                tl.to(preloader, {
                    zIndex: -1,
                    display: "none",
                });
            };

            // Option 1: Hide when window is loaded (standard)
            hidePreloader();

        }
    });

    // Fallback: Force hide preloader after 2 seconds if window.load takes too long
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        if (preloader && !preloader.classList.contains('loaded')) {
            // We can manually trigger the removal or just hide it
            // Re-selecting parts to ensure we have access if scope issues, 
            // but here we just reuse the idea. 
            // Simpler approach for fallback:
            gsap.to(".preloader", {
                y: -1500, duration: 0.5, onComplete: () => {
                    preloader.style.zIndex = -1;
                    preloader.style.display = "none";
                }
            });
        }
    }, 2000);

    /*
     * ----------------------------------------------------------------------------------------
     *  CUSTOM CURSOR JS
     * ----------------------------------------------------------------------------------------
     */
    const cursorBall = document.getElementById('ball');

    if (cursorBall) {
        document.addEventListener('mousemove', function (e) {
            gsap.to(cursorBall, {
                duration: 0.3,
                x: e.clientX,
                y: e.clientY,
                opacity: 1,
                ease: 'power2.out'
            });
        });

        const hoverElements = document.querySelectorAll('a');
        hoverElements.forEach(function (element) {
            element.addEventListener('mouseenter', function () {
                cursorBall.classList.add('hovered');
                gsap.to(cursorBall, {
                    duration: 0.3,
                    scale: 2,
                    opacity: 0,
                    ease: 0.1
                });
            });

            element.addEventListener('mouseleave', function () {
                cursorBall.classList.remove('hovered');
                gsap.to(cursorBall, {
                    duration: 0.3,
                    scale: 1,
                    opacity: 1,
                    ease: 'power2.out'
                });
            });
        });
    }

})(jQuery);