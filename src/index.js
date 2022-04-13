import $ from 'jquery';
import chooseAbout from './modules/chooseAbout';
import scrollIntoView from './modules/scrollIntoView';
import changeTheme from './modules/changeTheme';
import stickMenu from './modules/stickMenu';
import skillsAnimation from './modules/skillsAnimation';

chooseAbout();
scrollIntoView();
changeTheme();
stickMenu();
$();
skillsAnimation(
	[
		{
			skill: 'HTML & CSS',
			value: 50,
		},
		{
			skill: 'JAVASCRIPT',
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
	],
	150
);
