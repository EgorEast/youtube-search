import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;

const CardVideo = ({ videoId, previewSrc, altText, title, description }) => {
	return (
		<a
			href={`https://www.youtube.com/watch?v=${videoId}`}
			target='_blank'
			style={{ marginBottom: 20 }}
			rel='noreferrer'
		>
			<Card
				style={{ width: 245 }}
				cover={<img src={previewSrc} alt={altText} />}
			>
				<Meta title={title} description={description} />
			</Card>
		</a>
	);
};

CardVideo.propTypes = {
	previewSrc: PropTypes.string,
	altText: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	videoId: PropTypes.string,
};
export default CardVideo;
