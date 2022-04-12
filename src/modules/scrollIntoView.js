import { elementScrollIntoView } from 'seamless-scroll-polyfill';

const scrollIntoView = () => {
	const headerMenu = document.querySelector('.header-menu');

	const scrollUp = function (object) {
		elementScrollIntoView(object, { behavior: 'smooth', block: 'center', inline: 'center' });
	};

	headerMenu.addEventListener('click', (e) => {
		if (e.target.classList.contains('header-menu-item')) {
			const itemLink = document.getElementById(e.target.getAttribute('href').substring(1));
			scrollUp.bind(itemLink)(itemLink);
		}
	});
};

export default scrollIntoView;
