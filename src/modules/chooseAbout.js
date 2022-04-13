const chooseAbout = () => {
	const chooseBlock = document.querySelector('.i5-about-choose');
	const chooseBlockAll = document.querySelectorAll('.i5-about-choose-block');
	const aboutContentAll = document.querySelectorAll('.i5-about-content');

	chooseBlock.addEventListener('click', (e) => {
		if (e.target.closest('.i5-about-choose-block')) {
			chooseBlockAll.forEach((item, index) => {
				aboutContentAll[index].classList.add('hidden');
				chooseBlockAll[index].classList.remove('selected');
				if (item === e.target.closest('.i5-about-choose-block')) {
					aboutContentAll[index].classList.toggle('hidden');
					chooseBlockAll[index].classList.toggle('selected');
				}
			});
		}
	});

	aboutContentAll[0].classList.toggle('hidden');
	chooseBlockAll[0].classList.toggle('selected');
};

export default chooseAbout;
