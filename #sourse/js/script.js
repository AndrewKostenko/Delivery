// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================
// MOBILE =============================================================
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

// 	alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")
// /MOBILE =============================================================

const burger = document.querySelector('.menu_burger');
const introMenu = document.querySelector('.intro_menu');
burger.addEventListener('click', function () {
	this.classList.toggle('active');
	introMenu.classList.toggle('active')
});


//header
let header = document.querySelector('.header');
window.addEventListener('scroll', function () {
	if (window.scrollY > 1) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
})



//intro scroll
for (elem of introMenu.querySelectorAll('a')) {
	elem.addEventListener('click', function (e) {
		e.preventDefault();
		let elem = document.querySelector(`div[data-scroll=${this.innerHTML.toLowerCase()}]`) || document.querySelector(`footer[data-scroll=${this.innerHTML.toLowerCase()}]`);
		console.log(this.innerHTML);

		elem.scrollIntoView({ block: "center", behavior: "smooth" });

		burger.classList.remove('active');
		introMenu.classList.remove('active')

	})
}

//intro slider
const introSlider = new Swiper('.intro_slider', {
	loop: true,
	navigation: {
		prevEl: '.intro_slider-prev',
		nextEl: '.intro_slider-next',
	},
	noSwiping: true,
})


// intro types
const introTypes = document.querySelectorAll('.form-intro_type');

for (elem of introTypes) {
	elem.addEventListener('click', function () {
		for (elem of introTypes) {
			elem.classList.remove('active');
		}
		this.classList.add('active')
	})
}

// intro kinds
const introKinds = document.querySelectorAll('.form-intro_kind');

for (elem of introKinds) {
	elem.addEventListener('click', function () {
		for (elem of introKinds) {
			elem.classList.remove('active');
		}
		this.classList.add('active')
	})
}

// intro arrow
const introArrow = document.querySelector('.form-intro_arrow');
const intro = document.querySelector('.intro');

introArrow.addEventListener('click', function () {
	window.scrollTo({
		top: intro.scrollHeight + 30,
		behavior: "smooth"
	});
})


// gallery

lightGallery(document.querySelector('.gallery_items'));


//comments slider

let commentsIndex = 0;
const commentsImages = document.querySelectorAll('.comments_img');
const commentsSlider = new Swiper('.comments_slider', {
	noSwiping: false,
	slidesPerView: 1,
	initialSlide: 3,
	centeredSlides: true,
	breakpoints: {
		650: {
			slidesPerView: 3,
		},
		1100: {
			slidesPerView: 5,
		},
	},
	on: {
		slideChange: function (index) {
			commentsIndex = index.activeIndex;

			for (let a = 0; a < commentsImages.length; a++) {
				commentsImages[a].style.transform = 'scale(0)';
				commentsImages[a].classList.remove('active');

				if (a < commentsIndex && window.innerWidth > 1100) {
					commentsImages[a].style.right = '20%';
					commentsImages[a].style.left = 'auto';
				} else if (a > commentsIndex && window.innerWidth > 1100) {
					commentsImages[a].style.right = 'auto';
					commentsImages[a].style.left = '20%';
				}

				commentsImages[commentsIndex].style.right = 'auto';
				commentsImages[commentsIndex].style.left = 'auto';
			}

			if (commentsImages[commentsIndex]) {
				commentsImages[commentsIndex].style.transform = 'scale(1)';
				commentsImages[commentsIndex].classList.add('active');
			}
			if (commentsImages[commentsIndex - 1]) {
				commentsImages[commentsIndex - 1].style.transform = 'scale(0.7)';
			}
			if (commentsImages[commentsIndex + 1]) {
				commentsImages[commentsIndex + 1].style.transform = 'scale(0.7)';
			}
			if (commentsImages[commentsIndex - 2]) {
				commentsImages[commentsIndex - 2].style.transform = 'scale(0.6)';
			}
			if (commentsImages[commentsIndex + 2]) {
				commentsImages[commentsIndex + 2].style.transform = 'scale(0.6)';
			}
		},
		afterInit: function (index) {
			for (let a = 0; a < commentsImages.length; a++) {
				commentsImages[a].style.transform = 'scale(0)';
				commentsImages[a].classList.remove('active');
				if (a < commentsIndex && window.innerWidth > 1100) {
					commentsImages[a].style.right = '20%';
					commentsImages[a].style.left = 'auto';
				} else if (a > commentsIndex && window.innerWidth > 1100) {
					commentsImages[a].style.right = 'auto';
					commentsImages[a].style.left = '20%';
				}
			}

			if (commentsImages[commentsIndex]) {
				commentsImages[commentsIndex].style.transform = 'scale(1)';
				commentsImages[commentsIndex].classList.add('active');
			}
			if (commentsImages[commentsIndex - 1]) {
				commentsImages[commentsIndex - 1].style.transform = 'scale(0.7)';
			}
			if (commentsImages[commentsIndex + 1]) {
				commentsImages[commentsIndex + 1].style.transform = 'scale(0.7)';
			}
			if (commentsImages[commentsIndex - 2]) {
				commentsImages[commentsIndex - 2].style.transform = 'scale(0.6)';
			}
			if (commentsImages[commentsIndex + 2]) {
				commentsImages[commentsIndex + 2].style.transform = 'scale(0.6)';
			}
		},
	},

})


//comments text slider

const commentsSubslider = new Swiper('.comments_subslider', {
	initialSlide: 3,
	navigation: {
		nextEl: ".comments_next",
		prevEl: ".comments_prev",
	},
});

commentsSlider.controller.control = commentsSubslider;
commentsSubslider.controller.control = commentsSlider;


