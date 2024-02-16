// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper from 'swiper'
import {Navigation, Pagination} from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    // home-top
    const homeTop = new Swiper('.home-top-swiper', {
        // Optional parameters
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.home-top__slider-next',
            prevEl: '.home-top__slider-pre',
        },
    });

    // home-gallery
    const homeGallery = new Swiper('.swiper-gallery', {
        direction: 'horizontal',
        slidesPerView: 3,
        loop: true,
        loopAdditionalSlides: 3,
        loopedSlides: 3,
        spaceBetween: 10,
    });

    // home-feedback
    const homeFeedback = new Swiper('.home-feedback-swiper', {
        // Optional parameters
        modules: [Pagination],
        direction: 'horizontal',
        slidesPerView: 4,
        loop: true,
        loopAdditionalSlides: 4,
        loopedSlides: 4,
        spaceBetween: 30,

        // If we need pagination
        pagination: {
            el: '.home-feedback-swiper-pagination',
        },
    });

    // booking-slider
    const bookingSlider = new Swiper('.booking-slider', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 4,
        loop: true,
        loopAdditionalSlides: 4,
        loopedSlides: 4,
        spaceBetween: 0,
    });
})
