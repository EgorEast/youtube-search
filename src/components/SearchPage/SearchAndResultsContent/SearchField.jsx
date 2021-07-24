import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { HeartOutlined } from '@ant-design/icons';

const { Search } = Input;

const SearchField = ({ isSearch, setIsSearch }) => {
	const getStylesHeart = () => {
		const style = {
			fontSize: 16,
			color: '#1890ff',
			display: 'none',
		};
		if (isSearch) return { ...style, display: 'inline-block', width: '100%' };
		return style;
	};
	const getStylesSearch = () => {
		if (isSearch)
			return {
				width: '1030px',
			};
		return {
			width: '686px',
		};
	};

	const onSearch = (value) => {
		console.log(value);

		if (value.trim()) setIsSearch(true);
	};

	const onSave = (value) => console.log(value);

	const suffix = <HeartOutlined style={getStylesHeart()} onClick={onSave} />;
	return (
		<Search
			placeholder='Что хотите посмотреть?'
			enterButton='Search'
			size='large'
			suffix={suffix}
			onSearch={onSearch}
			style={getStylesSearch()}
		/>
	);
};

SearchField.propTypes = {
	isSearch: PropTypes.boolean,
	setIsSearch: PropTypes.func,
};

export default SearchField;
