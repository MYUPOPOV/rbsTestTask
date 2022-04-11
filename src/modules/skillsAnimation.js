import { animate } from './helpers';

const skillsAnimation = (skillsArray) => {
	const skillItems = document.querySelectorAll('.i2-skills-item');

	console.log(skillsArray);
	console.log(skillItems);

	skillItems.forEach((item, index) => {
		item.querySelector('.skill-name').textContent = skillsArray[index].skill;
		// item.querySelector('.skill-value').textContent = skillsArray[index].value + '%';

		// item.querySelector('.skill-name').style.width
		// console.log(item.querySelector('.skill-name').style.width);

		animate({
			duration: 500,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				item.querySelector('.skill-name').style.width = `${progress * skillsArray[index].value}%`;
				item.querySelector('.skill-value').textContent = `${progress * skillsArray[index].value}%`;
			},
		});
	});
};
export default skillsAnimation;
