import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSearch } from '../../../store/isSearchSlice';
import { Input } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { getVideos } from '../../../store/videoListSlice';
import { setVisibleModal } from '../../../store/visibleModalSlice';
import { setTermSearchField } from '../../../store/termSearchFieldSlice';

const { Search } = Input;

const SearchField = () => {
	const isSearch = useSelector((state) => state.isSearch.isSearch);
	const [isFieldFilled, setIsFieldFilled] = useState(false);
	const dispatch = useDispatch();

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

	const onSearch = (termFromInputField) => {
		if (termFromInputField.trim()) {
			dispatch(getVideos({ termFromInputField }));
			dispatch(setIsSearch(true));
			setIsFieldFilled(true);
		}
	};
	const onChangeSearch = (obj) => {
		if (obj.target.value.trim()) {
			setIsFieldFilled(true);
			dispatch(setTermSearchField(obj.target.value));
		} else setIsFieldFilled(false);
	};

	const onSave = () => {
		if (isFieldFilled) dispatch(setVisibleModal(true));
	};

	const suffix = <HeartOutlined style={getStylesHeart()} onClick={onSave} />;
	return (
		<Search
			placeholder='Что хотите посмотреть?'
			enterButton='Search'
			size='large'
			suffix={suffix}
			onSearch={onSearch}
			onChange={onChangeSearch}
			style={getStylesSearch()}
		/>
	);
};

export default SearchField;
