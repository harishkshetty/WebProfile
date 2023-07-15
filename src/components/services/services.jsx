import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Heading from '../../layouts/heading';
import { data } from '../../data/servicesData';
import { styled } from 'styled-components';

const StyledStack = styled(Stack)`
	&& {
		padding: 4rem 5rem;
		align-items: center;
		text-align: center;
		gap: 2rem;
		box-shadow: var(--red-shadow);
		border-radius: 10px;
	}
`;
const Services = () => {
	return (
		<Box className="about container second-black-container">
			<Heading
				id="services"
				headerText="Services"
			/>
			<Stack
				direction="row"
				justifyContent="space-between"
				gap={10}>
				{data.map((el) => {
					return (
						<StyledStack key={el.id}>
							{el.icon}
							<Typography
								variant="h4"
								color="var(--white-text)"
								fontSize="2rem">
								{el.name}
							</Typography>
							<Typography
								variant="body1"
								lineHeight="2"
								sx={{ color: 'var(--dark-gray-text)', letterSpacing: '2px' }}>
								{el.explain}
							</Typography>
						</StyledStack>
					);
				})}
			</Stack>
		</Box>
	);
};

export default Services;
