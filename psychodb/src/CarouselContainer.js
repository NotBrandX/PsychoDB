import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselContainer = ({ data }) => {
	return (
		<Carousel >
			{data.map((item) => {
				return (
					<Carousel.Item key={item.id} style={{ maxHeight: '90vh' }}>
						<img
							className='d-block w-100'
							style={{
								// height: '90vh',
								// width: '100%',
								objectFit: 'cover',
								overflow: 'hidden',
								background: 'gray',
							}}
							src={item.img}
							alt={item.title}
						/>
						<Carousel.Caption>
							<p>{item.name}</p>
						</Carousel.Caption>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

export default CarouselContainer;
