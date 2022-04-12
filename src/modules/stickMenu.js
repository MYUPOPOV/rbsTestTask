import { animate } from './helpers';

const stickMenu = () => {
	const header = document.querySelector('.header');
	let lastScrollTop = window.pageYOffset;

	const menuAnimate = (time) => {
		animate({
			duration: time,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				header.style.top = `${-60 + progress * 60}px`;
			},
		});
	};

	window.addEventListener('scroll', () => {
		if (window.pageYOffset < lastScrollTop) {
			if (header.style.top != '0px' && header.style.top.substr(0, 1) !== '-') {
				menuAnimate(1000);
			}
		} else {
			header.style.top = '';
		}
		lastScrollTop = window.pageYOffset;
	});
};

export default stickMenu;
