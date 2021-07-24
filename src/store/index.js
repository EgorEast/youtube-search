import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './activeFilterSlice';
import isSearchReducer from './isSearchSlice';
import videoListReducer from './videoListSlice';

export default configureStore({
	reducer: {
		activeFilter: activeFilterReducer,
		isSearch: isSearchReducer,
		videoList: videoListReducer,
	},
});
