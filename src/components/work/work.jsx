import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../../layouts/heading';
import { projData } from '../../data/projectsData';
import CustomButton from '../../layouts/customButton';
import { styled } from 'styled-components';

const StyledName = styled(Typography)`
	color: var(--white-text) !important;
	font-weight: 700 !important;
	font-family: 'Inter', sans-serif !important;
`;

const StyledParagraph = styled(Typography)`
	color: var(--gray-text) !important;
	max-width: 80%;
	font-size: 18px !important;
	margin: 0.3rem 0 !important;
	@media (max-width: 768px) {
		max-width: unset;
		font-size: 14px;
	}
`;
const Work = () => {
	return (
		<Box className="work container second-black-container">
			<Heading
				headerText="My Work"
				id="work"
			/>
			<Box className="projects">
				{projData.map((project) => {
					return (
						<Stack
							sx={{
								flexDirection: { xs: 'column-reverse', lg: 'row' },
								marginBottom: { xs: '2rem', lg: '1rem' },
							}}
							alignItems="center"
							justifyContent="space-between">
							<Stack
								sx={{
									width: { xs: '100%', lg: '50%' },
									alignItems: { xs: 'center', lg: 'unset' },
									textAlign: { xs: 'center', lg: 'unset' },
								}}>
								<StyledName variant="h4">{project.name}</StyledName>
								<StyledParagraph variant="body1">
									{project.describtion}
								</StyledParagraph>
								<Stack
									direction="row"
									height="50px"
									alignItems="center"
									gap={2}
									margin="0.5rem 0 0.7rem">
									{project.languages.map((lang) => lang)}
								</Stack>
								<Stack
									sx={{
										flexDirection: { xs: 'column-reverse', lg: 'row' },
										rowGap: { xs: '1rem', lg: 'unset' },
										columnGap: { xs: 'unset', lg: '1rem' },
									}}
									spacing={3}>
									<a
										href={project.link}
										target="_blank"
										rel="noreferrer"
										style={{ width: { xs: '100%', lg: 'fit-content' } }}>
										<CustomButton
											content="Go live"
											beforeWidth="100%"
											textColor="black"
											hoverColor="var(--white-text)"
											beforeBgColorHover="transparent"
											disabled={!project.done}
										/>
									</a>
									<CustomButton
										content="Learn more"
										beforeWidth={'0%'}
										beforeBgColorHover="var(--red-text)"
										hoverColor="black"
										textColor="var(--white-text)"
									/>
								</Stack>
							</Stack>
							<Stack
								sx={{ width: { xs: '100%', lg: '50%' } }}
								direction="row"
								overflow="hidden"
								justifyContent="center">
								<img
									src={require(`../../assets/images/${project.image}`)}
									alt={project.name}
									style={{
										width: '100%',
										objectFit: 'cover',
										transform: 'scale(1.3)',
									}}
								/>
							</Stack>
						</Stack>
					);
				})}
			</Box>
		</Box>
	);
};

export default Work;
