import React, { useState } from 'react';
import SearchField from './SearchField';
import FilterPanel from './FilterPanel';
import CardVideo from './CardVideo';
import { Typography } from 'antd';
import './MainContentSearchPage.scss';

const { Title } = Typography;

const MainContentSearchPage = () => {
	const [isSearch, setIsSearch] = useState(false);
	const displayResultsContainer = () => {
		if (!isSearch) return { display: 'none' };
	};
	return (
		<div className='search-page-main'>
			<div className='search-page-main-content'>
				<div className='search-container'>
					<Title>Поиск видео</Title>
					<SearchField setIsSearch={setIsSearch} isSearch={isSearch} />
				</div>
				<div className='results-container' style={displayResultsContainer()}>
					<FilterPanel />
					<div className='results'>
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
						<CardVideo />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContentSearchPage;
