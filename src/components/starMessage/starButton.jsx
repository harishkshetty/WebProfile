import React, { useState } from 'react';
import { Button } from '@mui/material';
import { styled } from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import Cookies from 'js-cookie';

const StyledButton = styled(Button)`
	&& {
		background: transparent;
		box-shadow: 0px 0px 6px 2px rgb(255 255 255 / 29%),
			0px 0px 6px 2px rgb(57 6 64 / 47%);
		transition: all 0.2s linear;
		width: fit-content;
	}

	&&:hover {
		background: rgb(36 36 62 / 81%);
		box-shadow: 0px 0px 6px 2px rgb(255 255 255 / 35%),
			0px 0px 6px 2px rgb(57 6 64 / 55%);
	}
`;

const StarButton = () => {
	const [starred, setStarred] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleClick = () => {
		const url = `https://api.github.com/user/starred/HossamMahmoudKhedr/hossam_mahmoud_portfolio`;

		const headers = {
			Authorization: `token ${process.env.REACT_APP_SECRET}`,
			'Content-Length': '0',
		};

		if (!starred) {
			fetch(url, {
				method: 'PUT',
				headers: headers,
			})
				.then((response) => {
					if (response.status === 204) {
						setStarred(true);
						setLoading(true);
						setTimeout(() => {
							setLoading(false);
						}, 2000);
					} else {
						setStarred(true);
					}
					Cookies.set('starred', true, { expires: 365 * 10 });
				})
				.catch((error) => {
					console.error('Error starring repository:', error);
				});
		}
	};
	return (
		<StyledButton
			onClick={handleClick}
			variant="contained">
			{!starred && '⭐ Star'}
			{loading && (
				<CircularProgress
					color="secondary"
					size="25px"
				/>
			)}
			{!loading && starred && 'Thanks for your support 😄'}
		</StyledButton>
	);
};

export default StarButton;
