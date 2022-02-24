import { IContacts } from './../../type/index';
import { createSlice } from '@reduxjs/toolkit';
type ContactState = IContacts[];
const initialState: ContactState = [];
const contact = createSlice({
  name: 'contact',
  initialState: {
    data: initialState,
  },
  reducers: {
    setContact(state, value) {
      state.data = value.payload;
    },
  },
});
export const { setContact } = contact.actions;
export default contact.reducer;
