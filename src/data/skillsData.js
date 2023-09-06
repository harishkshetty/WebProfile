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
export const skills = [
	{
		id: 1,
		name: 'HTML',
		info: 'Proficient in writing clean, semantic HTML code and creating well-structured website layouts. Experienced in using HTML to implement responsive designs, optimize for search engines (SEO), and enhance accessibility. Skilled in integrating HTML with CSS and JavaScript to develop interactive and dynamic web pages.',
		icon: '',
	},
	{
		id: 2,
		name: 'CSS',
		info: 'Proficient in writing efficient CSS code and creating visually appealing and responsive designs. Skilled in utilizing CSS frameworks like Bootstrap and preprocessors like SASS to streamline development workflows. Experienced in implementing animations, transitions, and optimizing stylesheets for performance.',
		icon: '',
	},
	{
		id: 3,
		name: 'JavaScript',
		info: 'I have a strong command of JavaScript, which allows me to bring life and interactivity to web applications. With my expertise in writing clean and efficient JavaScript code, I can create dynamic user interfaces that provide a smooth and engaging experience for users. I have the experience in handling DOM manipulation, implementing API calls, or creating interactive animations.',
		icon: '',
	},
	{
		id: 4,
		name: 'React.js',
		info: 'Experienced in building complex applications using React.js and its ecosystem. Proficient in designing reusable components, managing state and props, and utilizing React Router for efficient navigation. Skilled in integrating external libraries, handling form inputs, and optimizing React applications for speed and performance.',
		icon: '',
	},
	{
		id: 5,
		name: 'Redux',
		info: ' Experienced in utilizing Redux for state management in complex JavaScript applications. Proficient in setting up Redux stores, defining actions, reducers, and connecting components. Skilled in managing application state, handling asynchronous operations with middleware, and optimizing Redux architecture.',
		icon: '',
	},
	{
		id: 6,
		name: 'Bootstrap',
		info: "Proficient in utilizing Bootstrap framework to create responsive and mobile-first websites. Skilled in leveraging Bootstrap's grid system, components, and utilities to streamline development and ensure consistent styling across different devices. Experienced in customizing and extending Bootstrap to meet specific project requirements.",
		icon: '',
	},
	{
		id: 7,
		name: 'SASS',
		info: 'Proficient in using SASS to write modular and maintainable CSS code. Skilled in leveraging SASS features like variables, mixins, and nesting to improve efficiency and code organization. Experienced in utilizing SASS frameworks and building reusable stylesheets for large-scale projects.',
		icon: '',
	},
	{
		id: 8,
		name: 'Git/GitHub',
		info: 'Proficient in utilizing Git for version control and collaboration. Skilled in managing repositories, branching, merging, and resolving conflicts. Experienced in leveraging GitHub for project hosting, issue tracking, and contributing to open-source projects. Knowledgeable in Git workflows, including feature branching and pull request-based development.',
		icon: '',
	},
];
