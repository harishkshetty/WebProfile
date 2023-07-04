import { Button } from '@mui/material';
import styled from '@emotion/styled';
import React from 'react';

const StyledButton = styled(Button)`
	position: relative;
	border: 1px solid var(--red-text);
	width: fit-content;
	border-radius: 12px;
	color: #ffffff;
	font-weight: 700;
	padding: 1rem 4rem;
	text-transform: none;
	font-size: 1.2rem;
	z-index: 0;
	background-color: transparent;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 0;
		height: 100%;
		border-radius: 12px;
		z-index: -1;
		background-color: var(--red-text);
		transition: all 0.2s ease-in-out;
	}

	&:hover {
		color: #000000;
	}

	&:hover::before {
		width: 100%;
	}
`;
const CustomButton = ({ content }) => {
	return <StyledButton>{content}</StyledButton>;
};

export default CustomButton;
