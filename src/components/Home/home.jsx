import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Nav from '../nav/nav';
import PersonalImage from '../../assets/images/IMG_yphqhh222-removebg.png';
import CustomButton from '../../layouts/customButton';
const Home = () => {
	return (
		<Box
			id="home"
			className="home container"
			sx={{
				background: 'var(--home-background)',
			}}>
			<Nav />
			<Stack
				direction="row"
				alignItems={'center'}
				justifyContent={'center'}
				sx={{
					gap: '3rem',
					paddingLeft: { xs: '0rem', md: '8rem' },
					overflow: 'hidden',
					height: 'calc(100vh - 81px)',
				}}>
				<Stack
					spacing={2}
					sx={{
						alignItems: { xs: 'center', md: 'initial' },
						textAlign: { xs: 'center', md: 'initial' },
					}}>
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
						<CustomButton
							beforeWidth={'0%'}
							beforeBgColorHover="var(--red-text)"
							hoverColor="black"
							textColor="var(--white-text)"
							content="Get in touch"
						/>
					</a>
				</Stack>

				<Box
					className="personalImage"
					sx={{ display: { xs: 'none', md: 'block' } }}>
					<img
						style={{
							filter: 'drop-shadow(2px 4px 12px rgba(0,0,0,0.50))',
							width: '100%',
						}}
						src={PersonalImage}
						alt="Hossam Mahmoud"
					/>
				</Box>
			</Stack>
		</Box>
	);
};

export default Home;
