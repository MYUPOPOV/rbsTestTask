const chooseAbout = () => {
	$('.i5-about-choose-block').click(function () {
		$('.i5-about-choose-block').removeClass('selected');
		$(this).addClass('selected');
		$('.i5-about-content').addClass('hidden');
		$('.i5-about-content').eq($(this).index()).removeClass('hidden');
	});

	$('.i5-about-choose-block:eq(0)').addClass('selected');
	$('.i5-about-content:eq(0)').removeClass('hidden');
};

export default chooseAbout;
