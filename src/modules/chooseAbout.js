const chooseAbout = () => {
	const chooseBlock = $('.i5-about-choose')[0];
	const chooseBlockAll = $('.i5-about-choose-block');
	const aboutContentAll = $('.i5-about-content');

	chooseBlock.addEventListener('click', (e) => {
		if (e.target.closest('.i5-about-choose-block')) {
			chooseBlockAll.each((index) => {
				$('.i5-about-content:eq(index)').addClass('hidden');
				$('.i5-about-choose-block:eq(index)').removeClass('selected');
				// chooseBlockAll[index].classList.remove('selected');

				console.log($('.i5-about-content:eq(index)'));

				if ($('.i5-about-content:eq(index)') === e.target.closest('.i5-about-choose-block')) {
					$('.i5-about-content:eq(index)').toggleClass('hidden');
					$('.i5-about-choose-block:eq(index)').toggleClass('selected');
				}
			});
		}
	});

	$('.i5-about-choose-block:eq(0)').addClass('selected');
	$('.i5-about-content:eq(0)').removeClass('hidden');

	// const chooseBlock = $('.i5-about-choose')[0];
	// const chooseBlockAll = document.querySelectorAll('.i5-about-choose-block');
	// const aboutContentAll = document.querySelectorAll('.i5-about-content');

	// chooseBlock.addEventListener('click', (e) => {
	// 	if (e.target.closest('.i5-about-choose-block')) {
	// 		chooseBlockAll.forEach((item, index) => {
	// 			aboutContentAll[index].classList.add('hidden');
	// 			chooseBlockAll[index].classList.remove('selected');
	// 			if (item === e.target.closest('.i5-about-choose-block')) {
	// 				aboutContentAll[index].classList.toggle('hidden');
	// 				chooseBlockAll[index].classList.toggle('selected');
	// 			}
	// 		});
	// 	}
	// });
};

export default chooseAbout;
