import $ from 'jquery';

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

	// $('.i5-about-choose-block')[0].toggleClass('hidden');
	console.log($('.i5-about-choose-block')[0]);

	const elem = $('.i5-about-choose-block')[0];
	console.log('~ elem', elem);

	elem.addClass('selected');
	// $('.i5-about-choose-block')[0].addClass('selected');
	// chooseBlockAll[0].classList.toggle('selected');
};

export default chooseAbout;
