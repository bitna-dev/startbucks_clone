const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.removeAttribute('placeholder', '통합검색');
});

// BADGE
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener(
    'scroll',
    _.throttle(function () {
        if (this.scrollY > 500) {
            gsap.to(badgeEl, 0.6, {
                opacity: 0,
                display: 'none',
            });
            gsap.to(toTopEl, 0.6, {
                x: 0,
                display: 'flex',
            });
        } else {
            gsap.to(badgeEl, 0.6, {
                opacity: 1,
                display: 'block',
            });
            gsap.to(toTopEl, 0.6, {
                x: 100,
            });
        }
    }, 300)
);

// TO THE TOP
toTopEl.addEventListener('click', function () {
    gsap.to(window, 0.7, {
        scrollTo: 0,
    });
});

// FADE-IN
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (el, i) {
    gsap.to(el, 1, {
        delay: (i + 1) * 0.7,
        opacity: 1,
    });
});

// NOTICE LINE SWIPER
new Swiper('.notice-line .swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 1500,
    },
});
// PROMOTION SWIPER
new Swiper('.promotion .swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.promotion .swiper-next',
        prevEl: '.promotion .swiper-prev',
    },
});
// AWARDS SWIPER
new Swiper('.awards .swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
    },

    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next',
    },
});

// TOGGLE PROMOTION
const toggleEl = document.querySelector('.toggle-promotion');
const promoEl = document.querySelector('.promotion');
console.log(toggleEl, promoEl);
let isHidePromotion = false;

toggleEl.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
        promoEl.classList.add('hide');
    } else {
        promoEl.classList.remove('hide');
    }
    // if (isHidePromotion) {
    //     promoEl.setAttribute('style', 'display:block');
    // } else {
    //     promoEl.setAttribute('style', 'display:none');
    // }
});

// YOUTUBE COVER ANIMATION
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay),
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

// SCROLL
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {
    new ScrollMagic.Scene({
        triggerElement: spyEl, // 감시할 요소
        triggerHook: 0.8, //지점
    })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

// YEAR
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
