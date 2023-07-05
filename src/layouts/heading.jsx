import { Stack, Typography } from '@mui/material';
import React from 'react';
import { styled } from 'styled-components';

const StyledHeading = styled(Typography)`
	&& {
		position: relative;
		font-weight: 700;
		color: var(--white-text);
		padding-top: 3.4rem;
		margin-bottom: 5rem;
	}

	&::after {
		content: '';
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -5px;
		width: 35%;
		height: 5px;
		background-color: var(--icons-colors);
	}
`;
const Heading = ({ headerText }) => {
	return (
		<Stack
			className="heading"
			justifyContent="center"
			direction="row">
			<StyledHeading variant="h2">{headerText}</StyledHeading>
		</Stack>
	);
};

export default Heading;
