import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Detail = ({ error, characterDetail, show, handleClose }) => {
	if (!error) {
		return (
			<Modal
				className='modal-container'
				show={show}
				onHide={handleClose}
				size='xl'>
				<Modal.Header closeButton>
					<Modal.Title>{characterDetail.name}</Modal.Title>
				</Modal.Header>
				{characterDetail.img && <Image fluid src={characterDetail.img} />}
				<Modal.Body>
					<h1>{characterDetail.name}</h1>
					<h4>Gender: {characterDetail.gender}</h4>
					<h4>PSI-Powers:{characterDetail.psiPowers.map(psiPower => {
						return <p>{psiPower.name}</p>
					})}</h4>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	} else {
		return (
			<Modal 
				size='xl'
				show={show}
				onHide={handleClose}
				className='modal-container'>
				<Modal.Header closeButton>Oops!</Modal.Header>
				<Modal.Body>
					<p>Something went wrong. Please try another image.</p>
				</Modal.Body>
			</Modal>
		);
	}
};

export default Detail;
