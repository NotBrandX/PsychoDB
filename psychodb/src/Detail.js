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
					<Modal.Title>{characterDetail.characterObject.name}</Modal.Title>
				</Modal.Header>
				{characterDetail.characterObject.img && (
					<Image fluid src={characterDetail.characterObject.webImage.url} />
				)}
				<Modal.Body>
					<p>{characterDetail.characterObject.label.makerLine}</p>
					<h4>Description:</h4>
					<p>
						{characterDetail.characterObjectPage.plaqueDescription ? (
							characterDetail.characterObjectPage.plaqueDescription
						) : (
							<span style={{ fontStyle: 'italic' }}>Not available</span>
						)}
					</p>
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
