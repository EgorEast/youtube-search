import React from 'react';
import './HeaderSearchPage.scss';

const HeaderSearchPage = () => {
	return (
		<div className='header-search-page'>
			<div className='header-search-page-content'>
				<nav>
					<img src='logoSibdev.png' alt='' style={{ width: '48px' }} />
					<a href='#' target='_self' className='header-link'>
						Поиск
					</a>
					<a href='#' target='_self' className='header-link'>
						Избранное
					</a>
				</nav>
				<button className='exit-btn'>Выйти</button>
			</div>
		</div>
	);
};

export default HeaderSearchPage;
