import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LogoImage from '../../assets/images/Logo.png';
import Linkedin from '../../assets/icons/linkedin.svg';
import Github from '../../assets/icons/github2.svg';
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
					<svg width="54" height="54" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradientHS" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff9a8d" stopOpacity="1" />
        <stop offset="100%" stopColor="#ff9a8d" stopOpacity="1" />
      </linearGradient>
    </defs>
    <text
      x="5"
      y="35"
      fontSize="40"
      fontFamily="Arial"
      fill="url(#gradientHS)"
      stroke="black"
      strokeWidth="1"
    >
      H
    </text>
    <text
      x="25"
      y="35"
      fontSize="40"
      fontFamily="Arial"
      fill="url(#gradientHS)"
      stroke="black"
      strokeWidth="1"
    >
      S
    </text>
  </svg>
					</a>
				</Box>
				<Stack
					direction="row"
					alignItems="center"
					gap="1rem">
					<a
						href="https://www.linkedin.com/in/harish-k-shetty-007a3892/"
						target="_blank"
						rel="noreferrer">
						<img
							src={Linkedin}
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://wa.me/+917448619380?"
						target="_blank"
						rel="noreferrer">
						<img
							src={WhatsApp}
							alt="Send me a message"
						/>
					</a>
					<a
						href="https://github.com/harishkshetty"
						target="_blank"
						rel="noreferrer">
						<img
							src={Github}
							alt="GitHub"
						/>
					</a>
				</Stack>
			</Stack>
			<Typography
				variant="overline"
				color="var(--white-text)">
				© Copyright {year} - Harish K Shetty
			</Typography>
		</Box>
	);
};

export default Footer;
