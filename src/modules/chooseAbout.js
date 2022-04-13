const chooseAbout = () => {
	const chooseBlock = $('.i5-about-choose')[0];
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

	// const findJS
	console.log(document.getElementById('find-me'));
	// const findJQ
	console.log($('.i2-skills-right-block')[0]);
};

export default chooseAbout;
