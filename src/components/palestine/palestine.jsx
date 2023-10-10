import { Stack, Typography } from '@mui/material';
import React from 'react';

const Palestine = () => {
	return (
		<Stack
			direction="row"
			alignItems={'center'}
			justifyContent="center"
			backgroundColor="#234627"
			gap={'0.5rem'}
			height="35px"
			className="support-palestine">
			<Typography
				variant="body1"
				color="white"
				fontSize={{ xs: '0.8rem', md: '1rem' }}
				fontWeight="600"
				marginBottom="3px">
				Support Palestine against the brutal occupation{' '}
			</Typography>
			<span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					width="40px"
					height="30px"
					id="palestine">
					<path
						fill="#f0f0f0"
						d="M0 85.337h512v341.326H0z"></path>
					<path d="M0 85.337h512v113.775H0z"></path>
					<path
						fill="#6da544"
						d="M0 312.888h512v113.775H0z"></path>
					<path
						fill="#d80027"
						d="M256 256.006 0 426.668V85.331z"></path>
				</svg>
			</span>
		</Stack>
	);
};

export default Palestine;
