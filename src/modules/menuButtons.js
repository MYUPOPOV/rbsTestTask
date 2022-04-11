import { elementScrollIntoView } from 'seamless-scroll-polyfill';

const menuButtons = () => {
	const headerMenu = document.querySelector('.header-menu');
	console.log('~ headerMenu', headerMenu);

	const scrollUp = function (object) {
		elementScrollIntoView(object, { behavior: 'smooth', block: 'center', inline: 'center' });
	};

	headerMenu.addEventListener('click', (e) => {
		// console.log(e.target);

		if (e.target.classList.contains('header-menu-item')) {
			const itemLink = document.getElementById(e.target.getAttribute('href').substring(1));
			scrollUp.bind(itemLink)(itemLink);
		}
	});

	console.log('scrollIntoView');
};

export default menuButtons;
