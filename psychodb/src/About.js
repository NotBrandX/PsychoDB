import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const About = () => {
	return (
		<Jumbotron>
			<Container>
				<h1>About PsychoDB</h1>
				<Image
					fluid
					src='https://www.gameinformer.com/sites/default/files/2021/05/13/76c2efb4/336_heromid.jpg'
					alt='Razputin'
					style={{ paddingBottom: '1em' }}
				/>
				<p>
					PsychoDB is an application for users to interact with the Psychonauts
					API. The Psychonauts API contains information and images from the
					video game series "Psychonauts".
				</p>
				<Button
					variant='dark'
					href='https://www.doublefine.com/games/psychonauts'
					target='_blank'
					rel='noreferrer noopener'
					style={{ marginTop: '1em' }}>
					Check out the games
				</Button>
			</Container>
		</Jumbotron>
	);
};
export default About;
