import { createSlice } from '@reduxjs/toolkit';

const visibleModalSlice = createSlice({
	name: 'visible',
	initialState: {
		visible: false,
	},
	reducers: {
		setVisibleModal(state, action) {
			state.visible = action.payload;
		},
	},
});

export const { setVisibleModal: setVisibleModal } = visibleModalSlice.actions;

export default visibleModalSlice.reducer;
