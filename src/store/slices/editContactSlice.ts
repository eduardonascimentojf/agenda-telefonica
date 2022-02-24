import { IContacts } from './../../type/index';
import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
const editContact = createSlice({
  name: 'editContact',
  initialState: {
    data: initialState,
  },
  reducers: {
    setEditContact(state, value) {
      state.data = value.payload;
    },
  },
});
export const { setEditContact } = editContact.actions;
export default editContact.reducer;
