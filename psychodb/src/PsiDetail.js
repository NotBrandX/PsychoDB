import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const PsiDetail = ({ error, objectDetail, show, handleClose }) => {
	if (!error) {
		return (
			<Modal
				className='modal-container'
				show={show}
				onHide={handleClose}
				size='xl'>
				<Modal.Header closeButton>
					<Modal.Title>{objectDetail.psiObject.name}</Modal.Title>
				</Modal.Header>
				{objectDetail.psiObject.img && (
					<Image fluid src={objectDetail.psiObject.img.url} />
				)}
				<Modal.Body>
					<p>{objectDetail.psiObject.label.description}</p>
					<h4>Description:</h4>
					<p>
						{objectDetail.psiObjectPage.description ? (
							objectDetail.psiObjectPage.description
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

export default PsiDetail;
