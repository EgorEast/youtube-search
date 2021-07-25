import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './activeFilterSlice';
import isSearchReducer from './isSearchSlice';
import videoListReducer from './videoListSlice';
import visibleModalReducer from './visibleModalSlice';
import termSearchFieldReducer from './termSearchFieldSlice';

export default configureStore({
	reducer: {
		activeFilter: activeFilterReducer,
		isSearch: isSearchReducer,
		videoList: videoListReducer,
		visibleModal: visibleModalReducer,
		termSearchField: termSearchFieldReducer,
	},
});
