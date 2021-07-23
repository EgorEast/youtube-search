import React from 'react';
import HeaderSearchPage from './HeaderSearchPage';
import MainContentSearchPage from './MainContentSearchPage';

const SearchPage = () => {
	return (
		<div className='search-page page'>
			<HeaderSearchPage />
			<MainContentSearchPage />
		</div>
	);
};

export default SearchPage;
