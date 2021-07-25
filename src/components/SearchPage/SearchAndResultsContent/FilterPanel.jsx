import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { setActiveFilter } from '../../../store/activeFilterSlice';

const { Text } = Typography;
const FilterPanel = () => {
	const activeFilter = useSelector((state) => state.activeFilter.activeFilter);
	const termSearchField = useSelector(
		(state) => state.termSearchField.termSearchField
	);
	const dispatch = useDispatch();

	const getStyle = (filter) => {
		const style = {
			fontSize: 24,
			marginLeft: '15px',
		};
		if (filter === activeFilter) return style;
		return { ...style, color: 'lightgray' };
	};

	return (
		<div className='filter-panel'>
			<div>
				<Text style={{ marginRight: '15px' }}>
					Видео по запросу «{termSearchField}»
				</Text>
				<Text type='secondary'> </Text>
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
