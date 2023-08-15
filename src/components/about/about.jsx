import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../../layouts/heading';
import CustomButton from '../../layouts/customButton';
import { styled } from 'styled-components';
import { data } from '../../data/aboutData';

const CustomizeStack = styled(Stack)`
	position: relative;
	margin-right: 2rem;
	&::before {
		content: '';
		position: absolute;
		left: -5rem;
		top: -12.5%;
		width: 1px;
		height: 125%;
		background-color: var(--white-text);
		@media (max-width: 768px) {
			display: none;
		}
	}
`;
const About = () => {
	return (
		<Box className="about container black-container">
			<Heading
				headerText="About me"
				id="about"
			/>
			<Stack
				sx={{
					flexDirection: { xs: 'column', md: 'row' },
				}}
				justifyContent="space-between"
				marginY={3}>
				<Stack
					spacing={5}
					justifyContent="space-between"
					sx={{
						width: { xs: '100%', md: '60%' },
						alignItems: { xs: 'center', sm: 'flex-start' },
					}}>
					<Typography
						variant="body1"
						sx={{ fontSize: { xs: '16px', md: '20px' } }}
						className="gray-text">
						<h3>
							Hello, I'm Hossam<span>👋</span>
						</h3>
						<p>
							I'm a junior frontend developer with a passion for creating
							engaging and user-friendly web experiences. With a solid
							foundation in HTML, CSS, and JavaScript, I enjoy bringing designs
							to life and building intuitive interfaces.
						</p>
						<p>
							During my journey as a developer, I've gained experience in
							working with modern frontend frameworks like React.js and have a
							good understanding of responsive web design principles. I'm
							constantly learning and exploring new technologies to enhance my
							skills.
						</p>
					</Typography>
					<a
						href="#"
						style={{ width: 'fit-content' }}>
						<CustomButton
							beforeWidth="100%"
							beforeBgColorHover="transparent"
							hoverColor="var(--white-text)"
							textColor="black"
							content="Download my CV"></CustomButton>
					</a>
				</Stack>
				<CustomizeStack
					spacing={7}
					sx={{ display: { xs: 'none', md: 'flex' } }}
					justifyContent="center">
					{data.map((el) => {
						return (
							<Stack
								direction="row"
								spacing={1}
								alignItems="center"
								key={el.id}>
								<Typography
									variant="body1"
									fontSize="1rem"
									className="white-text"
									fontWeight="bold">
									{el.name}:
								</Typography>
								<Typography
									variant="body2"
									fontSize="1rem"
									className="gray-text"
									lineHeight="0">
									{el.value}
								</Typography>
							</Stack>
						);
					})}
				</CustomizeStack>
			</Stack>
		</Box>
	);
};

export default About;
