import { Button } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled(Button)`
	border: 1px solid var(--red-text);
	width: fit-content;
	border-radius: 12px;
	color: #ffffff;
	font-weight: 700;
	padding: 1rem 4rem;
	text-transform: none;
	font-size: 1.2rem;

	&:hover {
		background-color: var(--red-text);
		color: #000000;
	}
`;
const CustomButton = ({ content }) => {
	return <StyledButton>{content}</StyledButton>;
};

export default CustomButton;

// variant="outlined"
//sx={{ width: 'fit-content' }}>
