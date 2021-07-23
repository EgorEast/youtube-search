import React from 'react';
import HeaderPage from './HeaderPage';
import SearchAndResultsContent from './SearchAndResultsContent';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';

const SearchPage = () => {
	return (
		<BrowserRouter>
			<div className='search-page page'>
				<HeaderPage />
				<Switch>
					<Route exact path='/' component={SearchAndResultsContent} />
					{/* <Route path='/search' component={FavouritesContent} /> */}
					<Redirect to='/' />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default SearchPage;
