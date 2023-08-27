import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Heading from '../../layouts/heading';
import styled from '@emotion/styled';
import { exData } from '../../data/experienceData';
import { edData } from '../../data/educationData';
import { ReactComponent as ExperienceIcon } from '../../assets/icons/laptop-code-solid.svg';
import { ReactComponent as EducationIcon } from '../../assets/icons/graduation-cap-solid.svg';

const Exed = () => {
	const items = [
		<ExperienceIcon className="back-icon" />,
		<EducationIcon
			className="back-icon"
			style={{ right: '-55%', top: '-68%' }}
		/>,
	];

	const [showIcon, setShowIcon] = useState(true);
	// The status value
	const [status, setStatus] = useState('experience');

	// The Data should be shown
	const [data, setData] = useState(exData);

	// The chosen object to show its values
	const [chosenElement, setchosenElement] = useState(data[0]);

	const [item, setItem] = useState(0);

	useEffect(() => {
		window.onresize = () => {
			if (window.innerWidth > 1280) {
				setShowIcon(true);
			} else {
				setShowIcon(false);
			}
		};
		if (window.innerWidth > 1280) {
			setShowIcon(true);
		} else {
			setShowIcon(false);
		}
	}, [window.innerWidth]);
	// Change the stauts value
	const handleClick = (e) => {
		if (
			status === 'experience' &&
			e.currentTarget.textContent === 'Education'
		) {
			setStatus('education');
			setData(edData);
			setchosenElement(edData[0]);
			setItem(1);
		} else if (
			status === 'education' &&
			e.currentTarget.textContent === 'Experience'
		) {
			setStatus('experience');
			setData(exData);
			setchosenElement(exData[0]);
			setItem(0);
		}
	};

	// Active the clicked item and set the chosen object
	const handleExperienceClick = (e) => {
		const allOptions = document.querySelectorAll('.experience');
		const clickedElement = e.currentTarget;
		const id = clickedElement.id;

		allOptions.forEach((ex) => {
			ex.classList.remove('activeBox');
		});

		clickedElement.classList.add('activeBox');

		const experience = data.filter((ex) => (ex.name === id ? ex : ''));
		setchosenElement(...experience);
	};

	return (
		<Box
			className="exed container black-container"
			position="relative"
			zIndex="1">
			<Stack
				justifyContent="space-between"
				alignItems="center"
				direction="row">
				<Heading
					headerText="Experience"
					id="exed"
					exed={true}
					justify="flex-start"
					restprops={{
						sx: {
							opacity: `${status === 'experience' ? '1' : '0.5'}`,
							transition: 'all 0.2s linear',
							transformOrigin: 'right',
							cursor: 'pointer',
							fontSize: { sx: '1.2rem', lg: 'initial' },
						},
						onClick: handleClick,
					}}
				/>

				<Heading
					headerText="Education"
					id="exed"
					exed={true}
					justify="flex-end"
					restprops={{
						sx: {
							opacity: `${status === 'education' ? '1' : '0.5'}`,
							transition: 'all 0.2s linear',
							transformOrigin: 'left',
							cursor: 'pointer',
						},
						onClick: handleClick,
					}}
				/>
			</Stack>
			<Stack
				direction="row"
				color="var(--white-text)"
				sx={{
					flexDirection: { xs: 'column', lg: 'row' },
					gap: { xs: '2rem', lg: 'unset' },
				}}>
				<Stack
					sx={{
						width: { xs: '100%', lg: '32%' },
						borderRight: { xs: 'none', lg: '1px solid var(--white-text)' },
					}}
					height="100%"
					justifyContent="center">
					{data.map((ex) => {
						return (
							<Box
								id={ex.name}
								key={ex.id}
								onClick={handleExperienceClick}
								className={`${status} ${ex.id === 1 ? 'activeBox' : ''}`}
								sx={{
									cursor: 'pointer',
									borderBottom: `${
										ex.id < data.length ? '1px solid var(--white-text)' : ''
									}`,
									padding: '4rem 2rem',
									textAlign: 'center',
									fontWeight: 'bold',
								}}>
								<Typography
									variant="h2"
									fontWeight="bold"
									sx={{ fontSize: { xs: '2.5rem', lg: '3.5rem' } }}>
									{ex.name}
								</Typography>
								<Typography
									variant="subtitle1"
									sx={{ color: 'var(--gray-text)' }}>
									{ex.type}
								</Typography>
							</Box>
						);
					})}
				</Stack>
				<Stack
					sx={{
						padding: { xs: 'unset', lg: '1rem 4rem' },
						position: 'relative',
					}}>
					{showIcon && items[item]}
					<Typography
						variant="h5"
						sx={{
							marginBottom: '0.5rem',
							fontSize: `${
								chosenElement.name === 'Bachelor in Computer Science'
									? { xs: '1rem', lg: '1.3rem' }
									: { xs: '1rem', lg: '1.5rem' }
							}`,
							fontWeight: '500',
						}}>
						{chosenElement.about.date}
					</Typography>
					<Typography
						variant="body2"
						sx={{
							marginBottom: '1rem',
							letterSpacing: '1.3px',
							lineHeight: '1.6',
							fontSize: { xs: '0.8rem', lg: 'initial' },
						}}
						dangerouslySetInnerHTML={{
							__html: chosenElement.about.info,
						}}></Typography>
					<Typography
						variant="h6"
						sx={{
							fontWeight: '500',
							fontSize: { xs: '1rem', lg: 'initial' },
						}}>
						{chosenElement.about.subTitle}
					</Typography>

					<ul
						style={{
							marginLeft: '2rem',
							lineHeight: '1.6',
						}}>
						{chosenElement.about.list.map((item) => {
							return (
								<li>
									<Typography
										variant="body2"
										letterSpacing="1.3px"
										sx={{
											fontSize: { xs: '0.8rem', lg: 'initial' },
										}}>
										{item}
									</Typography>
								</li>
							);
						})}
					</ul>

					<Typography
						variant="h6"
						sx={{
							marginTop: '1rem',
							fontWeight: '500',
							fontSize: { xs: '1rem', lg: 'initial' },
						}}>
						{chosenElement.moreInfo.title}
					</Typography>
					<Typography
						variant="overline"
						sx={{
							fontSize: { xs: '0.7rem', lg: 'initial' },
						}}>
						{chosenElement.moreInfo.text}
					</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Exed;
