import { createSlice } from '@reduxjs/toolkit';

const termSearchFieldSlice = createSlice({
	name: 'termSearchField',
	initialState: {
		termSearchField: '',
	},
	reducers: {
		setTermSearchField(state, action) {
			state.termSearchField = action.payload;
		},
	},
});

export const { setTermSearchField: setTermSearchField } =
	termSearchFieldSlice.actions;

export default termSearchFieldSlice.reducer;
