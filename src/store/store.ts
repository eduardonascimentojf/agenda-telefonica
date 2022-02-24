import { configureStore } from '@reduxjs/toolkit';

import contactReducer from './slices/contactSlice';
import editContactReducer from './slices/editContactSlice';
import imageReducer from './slices/imageSlice';
const store = configureStore({
  reducer: {
    contact: contactReducer,
    editContact: editContactReducer,
    image: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
