import React, {useState, useEffect} from 'react';
import data from './data.json'
import { Switch, Route, Redirect } from 'react-router';
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import Characters from './Characters';
import PsiPowers from './PsiPowers';
import Search from './Search';


function App() {
  const [searchOptions, setSearchOptions] = useState({
		url: 'https://psychonauts-api.herokuapp.com/api',
	});
  const [characterImages, setCharacterImages] = useState([]);
  const [psiImages, setPsiImages] = useState([]);

  const getCharacterImages = () => {
		const url = `${searchOptions.url}/characters`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
      setCharacterImages(res)})
			.catch(console.error);
	};

	useEffect(() => {
		getCharacterImages();
	}, []);
  
const getPsiImages = () => {
	const url = `${searchOptions.url}/Powers`;
	fetch(url)
		.then((res) => res.json())
		.then((res) => {
			setPsiImages(res);
		})
		.catch(console.error);
};

useEffect(() => {
	getPsiImages();
}, []);

	return (
		<>
			<Navigation />
			<main>
				<Switch>
					<Route
						exact
						path='/home'
						render={() => <CarouselContainer data={data} />}
					/>
					<Route exact path='/about' component={About} />
					<Route
						exact
						path='/characters'
						render={() => (
							<Characters
								images={characterImages}
								searchOptions={searchOptions}
                // getCharacterImages={getCharacterImages}
							/>
						)}
					/>
					<Route
						exact
						path='/psipowers'
						render={() => (
							<PsiPowers 
              images={psiImages} 
              searchOptions={searchOptions} 
              // getPsiImages={getPsiImages}
              />
						)}
					/>
					<Route
						exact
						path='/search'
						render={() => <Search 
							setCharacterImagesState={setCharacterImages}
							imagesState={characterImages}
							searchOptions={searchOptions} />}
					/>;
					<Redirect path='*' to='/home' />
				</Switch>
			</main>
		</>
	);
}

export default App;
