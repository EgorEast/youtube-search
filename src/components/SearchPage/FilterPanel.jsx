import React, { useState } from 'react';
import { Typography } from 'antd';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';

const { Text } = Typography;
const FilterPanel = () => {
	const [activeFilter, setActiveFilter] = useState('grid');

	const getStyle = (filter) => {
		const style = {
			fontSize: 24,
			marginLeft: '15px',
		};
		if (filter === activeFilter) return { ...style, color: 'lightgray' };
		return style;
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
						setActiveFilter('list');
					}}
				/>
				<AppstoreOutlined
					style={getStyle('grid')}
					onClick={() => {
						setActiveFilter('grid');
					}}
				/>
			</div>
		</div>
	);
};

export default FilterPanel;
