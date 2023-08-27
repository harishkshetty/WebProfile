import { ReactComponent as Axios } from '../assets/icons/axios.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as CSS } from '../assets/icons/css3-alt.svg';
import { ReactComponent as MUI } from '../assets/icons/MaterialUI.svg';
import { ReactComponent as JavaScript } from '../assets/icons/square-js.svg';
import { ReactComponent as HTML } from '../assets/icons/html5.svg';
let height = '40px';
let width = '50px';
const icons = {
	html: (
		<HTML
			width={width}
			height={height}
		/>
	),
	css: (
		<CSS
			width={width}
			height={height}
		/>
	),
	javascript: (
		<JavaScript
			width={width}
			height={height}
		/>
	),
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
		name: 'Portfolio Website',
		describtion:
			'Explore the comprehensive portfolio website of an accomplished Architecture Engineer, showcasing her diverse skill set, extensive experience, and notable educational background.',
		languages: [icons.react, icons.css],
		image: 'Nourhan-Shakir1.png',
		link: 'https://hossammahmoudkhedr.github.io/Architecture-Engineer-Portfolio-Website/',
		done: true,
	},
	{
		id: 2,
		name: 'Light Plus',
		describtion:
			"Fine-tuned the visual aspects of the theme. Through CSS modifications, I optimized the typography, and color palette to align with the brand's identity. Integrated JavaScript enhancements to improve user interactions.",
		languages: [icons.html, icons.javascript, icons.css],
		image: 'Light-plus.png',
		link: 'https://light-plus.co/',
		done: true,
	},
	{
		id: 3,
		name: 'Fit Club',
		describtion:
			'Explore the comprehensive portfolio website of an accomplished Architecture Engineer, showcasing her diverse skill set, extensive experience, and notable educational background.',
		languages: [icons.html, icons.javascript, icons.css],
		image: 'Fit-Club.png',
		link: 'https://hossammahmoudkhedr.github.io/FitClub-Website/',
		done: true,
	},
];
