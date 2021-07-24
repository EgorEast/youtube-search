import { createSlice } from '@reduxjs/toolkit';

const activeFilterSlice = createSlice({
	name: 'activeFilter',
	initialState: {
		activeFilter: 'grid',
	},
	reducers: {
		setActiveFilter(state, action) {
			state.activeFilter = action;
		},
	},
});

export const { setActiveFilter: setActiveFilter } = activeFilterSlice.actions;

export default activeFilterSlice.reducer;
