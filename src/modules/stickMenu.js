const stickMenu = () => {
	let lastScrollTop = window.pageYOffset;

	window.addEventListener('scroll', () => {
		// console.log('lastScrollTop: ', lastScrollTop);
		// console.log('window.pageYOffset: ', window.pageYOffset);

		if (window.pageYOffset < lastScrollTop) {
			console.log('Показываем меню');
		}
		lastScrollTop = window.pageYOffset;
	});
};

export default stickMenu;
