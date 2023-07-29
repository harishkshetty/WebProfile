import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Heading from '../../layouts/heading';
import { styled } from 'styled-components';
import { skills } from '../../data/skillsData';
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
} from '@mui/lab';

const StyledConnector = styled(TimelineConnector)`
	&& {
		background-color: var(--white-text);
	}
`;

const StyledContent = styled(TimelineContent)`
	&& {
		color: var(--white-text);
		cursor: pointer;
	}
`;

const Skills = () => {
	const [clickedElement, setClickedElemetn] = useState(1);
	const [chosenSkill, setChosenSkill] = useState(skills[0]);
	const handleClick = (id) => {
		setClickedElemetn(id);
		let skill = skills.filter((el) => (el.id === id ? el : ''));
		setChosenSkill(skill[0]);
	};
	return (
		<Box className="skills container black-container">
			<Heading
				id="skills"
				headerText="Skills"
			/>
			<Stack
				direction="row"
				gap="1rem">
				<Timeline position="alternate">
					{skills.map((skill, index) => {
						return (
							<TimelineItem key={skill.id}>
								<TimelineSeparator>
									<TimelineDot
										onClick={() => {
											handleClick(skill.id);
										}}
										sx={{
											background:
												clickedElement === skill.id
													? 'var(--active-skill-green)'
													: 'var(--white-text)',
											cursor: 'pointer',
										}}
									/>
									{index === skills.length - 1 ? '' : <StyledConnector />}
								</TimelineSeparator>
								<StyledContent
									onClick={() => {
										handleClick(skill.id);
									}}>
									{skill.name}
								</StyledContent>
							</TimelineItem>
						);
					})}
				</Timeline>
				<Stack
					key={chosenSkill.id}
					borderRadius="10px"
					padding="3rem 5.5rem"
					boxShadow="3px 3px 29px 0px rgba(255, 154, 141, 0.25)"
					width="74%">
					<Stack gap="0.5rem">
						<Typography
							variant="h4"
							fontWeight="700"
							fontSize="2.6rem"
							color="var(--white-text)">
							{chosenSkill.name}
						</Typography>
						<Typography
							variant="body1"
							color="var(--white-text)"
							letterSpacing="1.3px"
							lineHeight="1.8">
							{chosenSkill.info}
						</Typography>
					</Stack>
					<Stack direction="row">{chosenSkill.icon}</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Skills;
