import React, {useState} from 'react';
import data from './data.json'
import characterObjects from './characterobjects.json'
import psiObjects from './psiobjects.json'
import { Switch, Route, Redirect } from 'react-router';
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import Characters from './Characters';
import psiPowers from './PsiPowers';
import './App.css';
import PsiPowers from './PsiPowers';

function App() {
  const [searchOptions, setSearchOptions] = useState({
		url: 'https://psychonauts-api.herokuapp.com/api',
		numberOfResults: 10,
	});
  const [characterImages, setCharacterImages] = useState(characterObjects);
  const [psiImages, setPsiImages] = useState(psiObjects);
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
						render={() => <PsiPowers images={psiImages} />}
					/>
					<Redirect path='*' to='/home' />
				</Switch>
			</main>
		</>
	);
}

export default App;
