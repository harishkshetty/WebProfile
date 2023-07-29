import { ReactComponent as Axios } from '../assets/icons/axios.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as CSS } from '../assets/icons/css3-alt.svg';
import { ReactComponent as MUI } from '../assets/icons/MaterialUI.svg';
let height = '40px';
let width = '50px';
const icons = {
	html: '',
	css: (
		<CSS
			width={width}
			height={height}
		/>
	),
	javascript: '',
	react: (
		<ReactIcon
			width={width}
			height={height}
		/>
	),
	mui: (
		<MUI
			width={width}
			height={height}
			transform="scale(0.8)"
		/>
	),
	axios: (
		<Axios
			width={width}
			height={height}
			transform="scale(4.5)"
		/>
	),
};

export const projData = [
	{
		id: 1,
		name: 'CValue',
		describtion:
			'A website to create your professional CV with the power of AI, ensuring it passes the ATS test and boosts your chances of securing that crucial first interview.',
		languages: [icons.react, icons.mui, icons.axios, icons.css],
		image: 'CValue1.png',
		link: '',
		done: false,
	},
	{
		id: 2,
		name: 'Architecture Engineer Portfolio ',
		describtion:
			'Explore the comprehensive portfolio website of an accomplished Architecture Engineer, showcasing her diverse skill set, extensive experience, and notable educational background.',
		languages: [icons.react, icons.css],
		image: 'Nourhan-Shakir1.png',
		link: '',
		done: true,
	},
];
