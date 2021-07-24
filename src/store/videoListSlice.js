import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import youtube from '../apis/youtube';

export const getVideos = createAsyncThunk(
	'videoList/getVideos',
	async (termFromInputField) => {
		const response = await youtube.get('/search', {
			params: {
				q: termFromInputField,
			},
		});
		return response.data;
	}
);

const videoListSlice = createSlice({
	name: 'videoList',
	initialState: {
		videoList: [],
		status: null,
	},
	reducers: {},
	extraReducers: {
		[getVideos.pending]: (state) => {
			state.status = 'loading';
		},
		[getVideos.fulfilled]: (state, action) => {
			state.videoList = action.payload.items;
			state.status = 'success';
		},
		[getVideos.rejected]: (state) => {
			state.status = 'failed';
		},
	},
});

export default videoListSlice.reducer;
