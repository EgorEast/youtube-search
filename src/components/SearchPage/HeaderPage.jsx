import React from 'react';
import './HeaderPage.scss';
import { NavLink } from 'react-router-dom';

const HeaderPage = () => {
	return (
		<div className='header-page'>
			<div className='header-page-content'>
				<nav>
					<img src='logoSibdev.png' alt='' style={{ width: '48px' }} />
					<NavLink to={'/search/results'} className='header-link'>
						Поиск
					</NavLink>
					<NavLink to={'/search/favorites'} className='header-link'>
						Избранное
					</NavLink>
				</nav>
				<NavLink to={'/'}>
					<button className='exit-btn'>Выйти</button>
				</NavLink>
			</div>
		</div>
	);
};

export default HeaderPage;
