import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { setActiveFilter } from '../../../store/activeFilterSlice';

const { Text } = Typography;
const FilterPanel = () => {
	const activeFilter = useSelector((state) => state.activeFilter.activeFilter);
	const dispatch = useDispatch();
	const getStyle = (filter) => {
		const style = {
			fontSize: 24,
			marginLeft: '15px',
		};
		if (filter === activeFilter.payload) return style;
		return { ...style, color: 'lightgray' };
	};

	return (
		<div className='filter-panel'>
			<div>
				<Text>Видео по запросу «{'Результат запроса'}»</Text>
				<Text type='secondary'>{'7230'}</Text>
			</div>
			<div>
				<UnorderedListOutlined
					style={getStyle('list')}
					onClick={() => {
						dispatch(setActiveFilter('list'));
					}}
				/>
				<AppstoreOutlined
					style={getStyle('grid')}
					onClick={() => {
						dispatch(setActiveFilter('grid'));
					}}
				/>
			</div>
		</div>
	);
};

export default FilterPanel;
