import React, { useState } from 'react';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';
import Characters from './Characters';
// import PsiPowers from './PsiPowers'

function Search({ searchOptions, setCharacterImagesState, imagesState }) {
	const [searchObj, setSearchObj] = useState({query : "", criteria : ""})
	const [searchString, setSearchString] = useState('');
	const [lastSearch, setLastSearch] = useState('');
	const [characterImages, setCharacterImages] = useState('');
    // const [psiImages, setPsiImages] = useState('');
	const [search, setSearch] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		// setSearchString(event.target.value);
		setSearchObj({...searchObj, [event.target.name] : event.target.value })
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getData(searchString);
	};

	const getData = (searchString) => {
		if (searchObj.query) {
			const url = `${searchOptions.url}/characters?${searchObj.criteria}=${searchObj.query}`;
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setError(false);
					setCharacterImages(res);
					setLastSearch(searchString);
					setSearch(true);
					setSearchString('');
					setCharacterImagesState(res)
					console.log('HEY', Array.isArray(res));
					console.log('HET AGAIN', res);
				})
				.then((res) => {
					if (!characterImages.length) {
						setError(true);
					}
				})
				.catch((err) => {
					console.error(err);
					setError(true);
				});
		}
	}

	return (
		<Container>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
				searchObj={searchObj}
			/>
			{setSearch && !error && (
				<>
					<p>
						Showing results for{' '}
						<span style={{ fontStyle: 'italic' }}>{lastSearch}:</span>{' '}
					</p>
					<Characters
						images={characterImages}
						getCharacterImages={getData}
						searchOptions={searchOptions}
					/>
				</>
			)}
			{setSearch && error && (
				<p>
					No results found for{' '}
					<span style={{ fontStyle: 'italic' }}>{lastSearch}</span>. Please try
					another search
				</p>
			)}
		</Container>
	);
}

export default Search;
