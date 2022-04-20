import { animate } from './helpers';

const skillsAnimation = (skillsArray, time) => {
	const skillItems = document.querySelectorAll('.i2-skills-item');
	const skillsBlock = document.getElementById('skills');
	let index = 0;
	let isSkillsAnimationShown = false;

	const getItemText = (index) => {
		skillItems[index].querySelector('.skill-value').textContent = skillsArray[index].value + '%';
		skillItems[index].querySelector('.skill-name').textContent = skillsArray[index].skill;
		index++;
		if (index < skillItems.length) {
			animateItem(index, time);
		}
	};
	const animateItem = (index, time) => {
		skillItems[index].style.opacity = '1';
		animate({
			duration: (time * skillsArray[index].value) / 30,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				skillItems[index].querySelector('.skill-name').style.width = `${progress * skillsArray[index].value}%`;
				if (progress >= 1) {
					getItemText(index);
				}
			},
		});
	};

	window.addEventListener('scroll', () => {
		const blockY = skillsBlock.getBoundingClientRect().bottom;
		const pageY = window.pageYOffset + skillsBlock.getBoundingClientRect().height;

		if (blockY < pageY && !isSkillsAnimationShown) {
			isSkillsAnimationShown = true;
			animateItem(index, time);
		}
	});
};
export default skillsAnimation;
