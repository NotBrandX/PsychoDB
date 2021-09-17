import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const PsiDetail = ({ error, psiDetail, show, handleClose }) => {
	if (!error) {
		return (
			<Modal
				className='modal-container'
				show={show}
				onHide={handleClose}
				size='xl'>
				<Modal.Header closeButton>
					<Modal.Title>{psiDetail.psiPowers.name}</Modal.Title>
				</Modal.Header>
				{psiDetail.img && <Image fluid src={psiDetail.img} />}
				<Modal.Body>
					<h1>{psiDetail.name}</h1>
					<h4>Description:</h4>
					<p>
						{/* {psiDetail.psiPowers.description ? (
							psiDetail.psiPowers.description
						) : (
							<span style={{ fontStyle: 'italic' }}>Not available</span>
						)} */}
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
