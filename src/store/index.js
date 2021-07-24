import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './activeFilterSlice';
import isSearchReducer from './isSearchSlice';

export default configureStore({
	reducer: {
		activeFilter: activeFilterReducer,
		isSearch: isSearchReducer,
	},
});
