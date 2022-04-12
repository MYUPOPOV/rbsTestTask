const changeTheme = () => {
	const button = document.getElementById('change-theme-button');

	const body = document.querySelector('body');
	const sectionBackgroundFilled = document.querySelectorAll('.section-background-filled');
	console.log('~ sectionBackgroundFilled', sectionBackgroundFilled);
	const header = document.querySelector('.header');
	const headerMenuThemeButton = document.querySelector('.header-menu-theme-button');
	const i2SkillsItemBox = document.querySelector('.i2-skills-item-box');
	const i5AboutChooseBlock = document.querySelector('.i5-about-choose-block');
	const footer = document.querySelector('.footer');

	// const array = [body, sectionBackgroundFilled, header, headerMenuThemeButton, i2SkillsItemBox, i5AboutChooseBlock, footer];

	button.addEventListener('click', () => {
		array.forEach((item) => {
			item.classList.toggle('dark-mode');
		});
	});
};

export default changeTheme;
