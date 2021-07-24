import React from 'react';
import { Typography } from 'antd';

import './FavouritesContent.scss';
const { Title } = Typography;

const FavoritesContent = () => {
	return (
		<div className='search-page-main-content'>
			<div className='favorites-content'>
				<Title>Избранное</Title>
			</div>
		</div>
	);
};

export default FavoritesContent;
