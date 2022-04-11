import chooseAbout from './modules/chooseAbout';
import menuButtons from './modules/menuButtons';
import skillsAnimation from './modules/skillsAnimation';

chooseAbout();
menuButtons();
skillsAnimation([
	{
		skill: 'HTML & CSS',
		value: 50,
	},
	{
		skill: 'JavaSript',
		value: 80,
	},
	{
		skill: 'GIT',
		value: 40,
	},
	{
		skill: 'WEBPACK',
		value: 40,
	},
	{
		skill: 'SCSS/SASS',
		value: 20,
	},
	{
		skill: 'BOOTSTRAP',
		value: 20,
	},
	{
		skill: 'GULP',
		value: 10,
	},
	{
		skill: 'PUG',
		value: 10,
	},
	{
		skill: 'PHOTOSHOP',
		value: 80,
	},
	{
		skill: 'FIGMA',
		value: 20,
	},
	{
		skill: 'REACT',
		value: 10,
	},
]);
