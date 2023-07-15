import React from 'react';
import { Box } from '@mui/material';
import Home from '../Home/home';
import About from '../about/about';
import Services from '../services/services';
import Exed from '../exed/exed';
const FullPage = () => {
	return (
		<Box className="fullcontainer">
			<Home />
			<About />
			<Services />
			<Exed />
		</Box>
	);
};

export default FullPage;
