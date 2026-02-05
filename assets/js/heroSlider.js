




// Background Slider Initialization
const heroBgSwiper = new Swiper('.hero-bg-slider', {
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            // Trigger WOW.js animations on the first slide
            if (typeof WOW !== 'undefined') {
                new WOW().init();
            }
        },
        slideChangeTransitionStart: function () {
            // Reset and re-trigger WOW.js animations on slide change
            const activeSlide = this.slides[this.activeIndex];
            const wowElements = activeSlide.querySelectorAll('.wow');
            wowElements.forEach(el => {
                el.style.visibility = 'hidden';
                el.classList.remove('animated');
                // Force reflow
                void el.offsetWidth;
                el.style.visibility = 'visible';
                el.classList.add('animated');
            });
        }
    }
});