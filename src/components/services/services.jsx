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
	@media (max-width: 768px) {
		&& {
			padding: 2rem 1rem;
			gap: 1.3rem;
		}
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
				sx={{ flexDirection: { sm: 'column', md: 'row' } }}
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
								sx={{
									color: 'var(--dark-gray-text)',
									letterSpacing: '2px',
									lineHeight: { xs: '1.7', sm: '1.8', md: '2' },
								}}>
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
