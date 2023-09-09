import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LogoImage from '../../assets/images/Logo.png';
import Upwork from '../../assets/icons/upwork 1.svg';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github2.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Mostaql from '../../assets/icons/Mostaql.svg';
import WhatsApp from '../../assets/icons/whatsapp.svg';

const Footer = () => {
	const [year, setYear] = useState();

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);
	return (
		<Box
			component="footer"
			id="contact"
			className="footer black-container"
			textAlign="center">
			<Stack
				justifyContent="center"
				alignItems="center"
				padding="2rem 0 0.5rem"
				gap="1rem">
				<Box>
					<a href="/">
						<img
							width="55px"
							src={LogoImage}
							alt="Hossam Mahmoud"
						/>
					</a>
				</Box>
				<Stack
					direction="row"
					alignItems="center"
					gap="1rem">
					<a
						href="https://www.upwork.com/freelancers/~01857fa5e4b8390d71"
						target="_blank"
						rel="noreferrer">
						<img
							src={Upwork}
							alt="Hire me on UpWork"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/hossam-mahmoud/"
						target="_blank"
						rel="noreferrer">
						<img
							src={Linkedin}
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://wa.me/+201201372503?"
						target="_blank"
						rel="noreferrer">
						<img
							src={WhatsApp}
							alt="Send me a message"
						/>
					</a>
					<a
						href="https://github.com/HossamMahmoudkhedr"
						target="_blank"
						rel="noreferrer">
						<img
							src={Github}
							alt="GitHub"
						/>
					</a>
					<a
						href="https://twitter.com/HossamKhedr01"
						target="_blank"
						rel="noreferrer">
						<img
							src={Twitter}
							alt="Twitter"
						/>
					</a>
					<a
						href="https://mostaql.com/u/Hossam_Mahmoud4"
						target="_blank"
						rel="noreferrer">
						<img
							src={Mostaql}
							alt="Hire me on Mostaql"
						/>
					</a>
				</Stack>
			</Stack>
			<Typography
				variant="overline"
				color="var(--white-text)">
				© Copyright {year} - Hossam Mahmoud
			</Typography>
		</Box>
	);
};

export default Footer;
