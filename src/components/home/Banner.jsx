import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button, Box } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bg from '../../media/banner.png'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    backgroundImage: `url(${bg})`,
    color: theme.palette.common.white,
    padding: theme.spacing(6),
    textAlign: 'center',
    //marginTop: 10
  },
  carouselBox: {
    marginTop: theme.spacing(6),
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing(3),
    left: '50%',
    transform: 'translateX(-50%)',
  },
}));

const Banner = () => {
	const classes = useStyles();

	// Les événements à afficher dans la bannière
	const events = [
		{
			title: 'Conférence sur l\'intelligence artificielle',
			date: '25 Mai 2023',
			location: 'UY1, S006',
		},
		{
			title: 'Lancement du nouveau produit',
			date: '1 Juin 2023',
			location: 'UY1, S005',
		},
		{
			title: 'Forum de l\'emploi',
			date: '15 Juin 2023',
			location: 'UY1, A350',
		},
		{
			title: 'Webinaire sur le développement web',
			date: '22 Avril 2023',
			location: 'En ligne',
		},
		{
			title: 'Séminaire sur la cybersécurité',
			date: '15 Avril 2023',
			location: 'UY1, E203',
		},
		{
			title: 'Atelier sur la productivité',
			date: '8 Avril 2023',
			location: 'UY1, Salle de conférence',
		},
	];

	return (
		<Paper className={classes.root}>
			<Typography variant="h4" gutterBottom>
				Mes Événements
			</Typography>
			<Box className={classes.carouselBox}>
				<Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay>
					{events.map((event, index) => (
						<div key={index}>
						<Typography variant="h5" gutterBottom>
							{event.title}
						</Typography>
						<Typography variant="body1" gutterBottom>
							{event.date} - {event.location}
						</Typography>
						</div>
					))}
				</Carousel>
			</Box>
		</Paper>
	)
}
     
export default Banner