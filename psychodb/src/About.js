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
					src='https://cdn.mos.cms.futurecdn.net/86d1996b05ea9a46c058bbac4864dc15-970-80.jpeg.webp'
					alt='Raz'
					style={{ paddingBottom: '1em' }}
				/>
				<p>
					PsychoDB is an application for users to interact with the Psychonauts
					API. The Psychonauts API contains information and images from the cult
					classic video game Psychonauts.
				</p>
				<Button
					variant='dark'
					href='https://www.doublefine.com/games/psychonauts'
					target='_blank'
					rel='noreferrer noopener'
					style={{ marginTop: '1em' }}>
					Check out the game
				</Button>
			</Container>
		</Jumbotron>
	);
};
export default About;
