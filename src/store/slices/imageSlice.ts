import { IContacts } from './../../type/index';
import { createSlice } from '@reduxjs/toolkit';
type ContactState = IContacts[];
const initialState: File | null = null;
const image = createSlice({
  name: 'image',
  initialState: {
    data: initialState,
  },
  reducers: {
    setImage(state, value) {
      state.data = value.payload;
    },
  },
});
export const { setImage } = image.actions;
export default image.reducer;
