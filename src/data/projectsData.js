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
		link: '#',
		gitLink: '#',
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
		gitLink:
			'https://github.com/HossamMahmoudkhedr/Architecture-Engineer-Portfolio-Website',
		done: true,
	},
	{
		id: 3,
		name: 'Light Plus',
		describtion:
			"Fine-tuned the visual aspects of the theme. Through CSS modifications, I optimized the typography, and color palette to align with the brand's identity. Integrated JavaScript enhancements to improve user interactions.",
		languages: [icons.html, icons.javascript, icons.css],
		image: 'Light-plus.png',
		link: 'https://light-plus.co/',
		gitLink: '#',
		done: true,
	},
	{
		id: 4,
		name: 'Fit Club',
		describtion:
			'Create a dynamic and responsive landing page for a prominent gym, showcasing its comprehensive array of services, pricing details, and indepth information. By adeptly utilizing React for front-end development and CSS for styling.',
		languages: [icons.react, icons.css],
		image: 'Fit-Club.png',
		link: 'https://hossammahmoudkhedr.github.io/FitClub-Website/',
		gitLink: 'https://github.com/HossamMahmoudkhedr/FitClub-Website',
		done: true,
	},
	{
		id: 5,
		name: 'Simah',
		describtion:
			"Crafted a compelling landing page utilizing React.js and pure CSS to represent an exceptional e-commerce enterprise. This website serves as a virtual gateway, effectively conveying the company's core strengths.",
		languages: [icons.react, icons.css],
		image: 'Simah.png',
		link: 'https://hossammahmoudkhedr.github.io/Managing-E-commerce-website/',
		gitLink:
			'https://github.com/HossamMahmoudkhedr/Managing-E-commerce-website',
		done: true,
	},
	{
		id: 6,
		name: 'Bondi',
		describtion:
			"Crafted a compelling landing page utilizing React.js and pure CSS to represent an exceptional e-commerce enterprise. This website serves as a virtual gateway, effectively conveying the company's core strengths.",
		languages: [icons.html, icons.css, icons.bootStrap],
		image: 'Bondi.png',
		link: 'https://hossammahmoudkhedr.github.io/Bondi-Landing-Page/',
		gitLink: 'https://github.com/HossamMahmoudkhedr/Bondi-Landing-Page',
		done: true,
	},
	{
		id: 7,
		name: 'Book Store',
		describtion:
			'Crafted a compelling landing page utilizing React.js and pure CSS to represent an exceptional Book Store website. This website serves as a virtual gateway, and shows all the books which you can order any of them online.',
		languages: [icons.react, icons.css],
		image: 'Book-Store.png',
		link: 'https://hossammahmoudkhedr.github.io/Book-Store/',
		gitLink: 'https://github.com/HossamMahmoudkhedr/Book-Store',
		done: true,
	},
	{
		id: 8,
		name: 'Shortly',
		describtion:
			'Crafted using HTML, CSS, and JavaScript, the website allows you to effortlessly transform lengthy website addresses into concise, user-friendly links.',
		languages: [icons.html, icons.css, icons.javascript],
		image: 'Shortly.png',
		link: 'https://hossammahmoudkhedr.github.io/Short-URL/',
		gitLink: 'https://github.com/HossamMahmoudkhedr/Short-URL',
		done: true,
	},
];
