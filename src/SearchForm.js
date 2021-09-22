import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchForm = ({ searchObj, handleSubmit, handleChange, searchString }) => {
	return (
		<Form onSubmit={handleSubmit}>
			<Row>
				<Col>
					<Form.Group>
						<Form.Control
							size='sm'
							placeholder='Type in search query'
							type='text'
							name='query'
							required
							onChange={handleChange}
							value={searchObj.query}
						/>
						<Form.Control
							size='sm'
							placeholder='Set search criteria'
							type='text'
							name='criteria'
							required
							onChange={handleChange}
							value={searchObj.criteria}
						/>
					</Form.Group>
					<Form.Text className='text-muted'>
						Search for characters by name or gender
					</Form.Text>
				</Col>
				<Col md='auto'>
					<Button type='submit' variant='dark' className='btn-sm'>
						Submit
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchForm;
