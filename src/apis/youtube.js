import axios from 'axios';
const MY_YOUTUBE_API_KEY = 'AIzaSyAu1XlvZAWKH5kmYHt79PrDqnG4h0lQjG4';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	params: {
		part: 'snippet',
		key: MY_YOUTUBE_API_KEY,
		type: 'video',
	},
});
