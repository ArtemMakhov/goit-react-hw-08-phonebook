import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const handlePending = (state) => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
  filter: ""
  },
  reducers: {
        setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    
    [addContact.pending]:handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    
    [deleteContact.pending]:handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(item => item.id === action.payload.id);
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]:handleRejected,
  },
});


export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;











