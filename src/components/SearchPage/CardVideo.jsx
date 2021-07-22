import React from 'react';
import { Card } from 'antd';
// import PropTypes from 'prop-types';

const { Meta } = Card;

// const CardVideo = ({ address, previewSrc, title, description }) => {
// 	return (
// 		<a href={address} target='_self'>
// 			<Card
// 				style={{ width: 245 }}
// 				cover={<img alt='preview' src={previewSrc} />}
// 			>
// 				<Meta title={title} description={description} />
// 			</Card>
// 		</a>
// 	);
// };

// CardVideo.propTypes = {
// 	previewSrc: PropTypes.string,
// 	title: PropTypes.string,
// 	description: PropTypes.string,
// 	address: PropTypes.string,
// };

const CardVideo = () => {
	return (
		<a href='#' target='_self'>
			<Card
				style={{ width: 245 }}
				cover={
					<img
						alt='preview'
						src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
					/>
				}
			>
				<Meta title='Card title' description='This is the description' />
			</Card>
		</a>
	);
};

export default CardVideo;
