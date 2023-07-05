import React from 'react';
import { Box } from '@mui/material';
import Home from '../Home/home';
import About from '../about/about';
import Services from '../services/services';
const FullPage = () => {
	return (
		<Box className="fullcontainer">
			<Home />
			<About />
			<Services />
		</Box>
	);
};

export default FullPage;
