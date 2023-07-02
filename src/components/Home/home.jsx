import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import Nav from '../nav/nav';
import PersonalImage from '../../assets/images/IMG_yphqhh222-removebg.png';
import CustomButton from '../../layouts/customButton';
const Home = () => {
	return (
		<Box
			className="container"
			sx={{ backgroundColor: 'var(--home-background)' }}>
			<Nav />
			<Stack
				direction="row"
				alignItems={'center'}
				sx={{
					gap: '3rem',
					paddingLeft: '8rem',
					overflow: 'hidden',
					height: 'calc(100vh - 81px)',
				}}>
				<Stack spacing={2}>
					<Stack className="text red-text">
						<Typography variant="body1">Hi there, my name is</Typography>
						<Typography
							variant="h1"
							sx={{ fontSize: '4rem', fontWeight: '700' }}>
							Hossam Mahmoud
						</Typography>
						<Typography variant="body1">
							I am a frontend web developer
						</Typography>
					</Stack>
					<a href="mailto:hossamkheder9999@gmail.com">
						<CustomButton content="Get in touch" />
					</a>
				</Stack>

				<Box className="personalImage">
					<img
						src={PersonalImage}
						alt="Hossam Mahmoud"
					/>
				</Box>
			</Stack>
		</Box>
	);
};

export default Home;
