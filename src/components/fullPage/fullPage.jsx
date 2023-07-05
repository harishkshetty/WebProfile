import React from 'react';
import { Box } from '@mui/material';
import Home from '../Home/home';
import About from '../about/about';
const FullPage = () => {
	return (
		<Box className="fullcontainer">
			<Home />
			<About />
		</Box>
	);
};

export default FullPage;
