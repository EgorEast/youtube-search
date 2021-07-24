import React from 'react';
import HeaderPage from './HeaderPage';
import SearchAndResultsContent from './SearchAndResultsContent/SearchAndResultsContent';
import FavouritesContent from './FavouritesContent/FavouritesContent';
import { Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';

const SearchPage = () => {
	return (
		<div className='search-page page'>
			<HeaderPage />
			<Switch>
				<Route path='/search/results' component={SearchAndResultsContent} />
				<Route path='/search/favorites' component={FavouritesContent} />
				<Redirect to='/search/results' />
			</Switch>
		</div>
	);
};

export default SearchPage;
