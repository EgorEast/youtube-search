import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './activeFilterSlice';

export default configureStore({
	reducer: {
		activeFilter: activeFilterReducer,
	},
});
