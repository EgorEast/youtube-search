import { createSlice } from '@reduxjs/toolkit';

const isSearchSlice = createSlice({
	name: 'isSearch',
	initialState: {
		isSearch: false,
	},
	reducers: {
		setIsSearch(state, action) {
			state.isSearch = action.payload;
		},
	},
});

export const { setIsSearch: setIsSearch } = isSearchSlice.actions;

export default isSearchSlice.reducer;
