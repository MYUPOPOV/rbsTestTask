const chooseAbout = () => {
	const chooseBlock = document.querySelector('.i5-about-choose');
	const chooseBlockAll = document.querySelectorAll('.i5-about-choose-block');
	const aboutContentAll = document.querySelectorAll('.i5-about-content');

	chooseBlock.addEventListener('click', (e) => {
		if (e.target.closest('.i5-about-choose-block')) {
			chooseBlockAll.forEach((item, index) => {
				aboutContentAll[index].classList.add('hidden');
				if (item === e.target.closest('.i5-about-choose-block')) {
					aboutContentAll[index].classList.toggle('hidden');
				}
			});
		}
	});
};

export default chooseAbout;
