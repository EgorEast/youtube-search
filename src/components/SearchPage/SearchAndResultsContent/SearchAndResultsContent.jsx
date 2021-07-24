import React from 'react';
import { useSelector } from 'react-redux';
import SearchField from './SearchField';
import FilterPanel from './FilterPanel';
import CardVideo from './CardVideo';
import { Typography } from 'antd';
import './SearchAndResultsContent.scss';

const { Title } = Typography;

const SearchAndResultsContent = () => {
	const isSearch = useSelector((state) => state.isSearch.isSearch);
	const videoList = useSelector((state) => state.videoList.videoList);
	console.log(videoList);

	const displayResultsContainer = () => {
		if (!isSearch) return { display: 'none' };
	};
	return (
		<div className='search-page-main-content'>
			<div className='search-and-results-content'>
				<div className='search-container'>
					<Title>Поиск видео</Title>
					<SearchField />
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

export default SearchAndResultsContent;
