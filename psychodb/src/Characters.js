import React, {useState} from 'react';
import Detail from './Detail';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';
import Container  from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

const Characters = ({ images }) => {
	if (!images) {
		<Container
		className='d-flex  justify-content-center align-items-center align-content-center'
		style={{ minHeight: '90vh' }}>
			<span style={{ paddingRight: '1em' }}>Loading results{'  '}</span>
			<Spinner animation='border' variant='dark' size='sm' />
		</Container>;
	}
	
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);
	const [activeItem, setActiveItem] = useState(null);
	const [searchOptions, setSearchOptions] = useState(null)

	const handleShow = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
		setError(false);
		setActiveItem(null);
	};

	const handleError = () => {
		setError(true);
	};

	const getDetail = (object) => {
		fetch(`${searchOptions.url}/characters?name=${object.name}`)
			.then((res) => res.json())
			.then((res) => {
				setActiveItem(res);
			})
			.then((res) => handleShow())
			.catch((err) => {
				handleError();
				handleShow();
			});
	};

	return (
		<CardColumns>
			{images.map((object) => {
				return (
					<Card key={object.id}>
						{object.img && (
							<Card.Img
								variant='top'
								src={object.img ? object.img.url : ''}
								alt={object.name}
							/>
						)}
						<Card.Body>
							{object.img ? (
								''
							) : (
								<Card.Title>No Image Available</Card.Title>
							)}
							<Card.Text className='text-muted'>{object.name}</Card.Text>
							<Button
								onClick={() => getDetail(object.id)}
								variant='outline-dark'>
								Details
							</Button>
						</Card.Body>
					</Card>
				);
			})}
			{(activeItem || error) && (
				<Detail
					characterDetail={activeItem}
					show={show}
					handleClose={handleClose}
					error={error}
				/>
			)}
		</CardColumns>
	);
};

export default Characters;
