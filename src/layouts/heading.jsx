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
		letter-spacing: 5px;
	}

	&::after {
		${(props) => (props.exed ? 'display: none;' : 'display: block;')}
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

const Heading = ({ headerText, id, justify, exed, restprops }) => {
	return (
		<Stack
			className="heading"
			justifyContent={!justify ? 'center' : justify}
			direction="row"
			{...restprops}
			id={id}>
			<StyledHeading
				exed={exed}
				variant="h2">
				{headerText}
			</StyledHeading>
		</Stack>
	);
};

export default Heading;
