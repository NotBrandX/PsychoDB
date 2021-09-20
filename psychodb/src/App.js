import React, {useState} from 'react';
import data from './data.json'
import characterObjects from './characterobjects.json'
import psiObjects from './psiobjects.json'
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
  const [characterImages, setCharacterImages] = useState(characterObjects);
  const [psiImages, setPsiImages] = useState(psiObjects);

  // const getCharacterImages = () => {
	// 	const url = `${url}/characters?name={searchOptions}`;
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((res) => setCharacterImages(res.characterObjects))
	// 		.catch(console.error);
	// };

	// useEffect(() => {
	// 	getCharacterImages();
	// }, []);

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
							/>
						)}
					/>
					<Route
						exact
						path='/psipowers'
						render={() => (
							<PsiPowers images={psiImages} searchOptions={searchOptions} />
						)}
					/>
					<Route
						exact
						path='/search'
						render={() => <Search searchOptions={searchOptions} />}
					/>;
					<Redirect path='*' to='/home' />
				</Switch>
			</main>
		</>
	);
}

export default App;
