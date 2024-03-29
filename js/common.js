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

// TO THE TOP
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function () {
	gsap.to(window, 0.7, {
		scrollTo: 0,
	});
});

// YEAR
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
