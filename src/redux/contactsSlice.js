import { createSlice } from '@reduxjs/toolkit';

import { addContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
    items: [],
    isLoading: false,
    error: null}
    
  ,
  filter: ""
  },
  reducers: {
        setFilter: (state, { payload }) => {
      state.contacts.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload)
      // state.items = action.payload;
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
  },
});


export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;











// const contactsInitialState =
// {
//   contacts: [],
//   filter: "",
// };

// const contactsSlice = createSlice({
//   name: 'phonebook',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer: (state, { payload }) => {
//         if (state.contacts.find(({ name }) => name === payload.name)) {
//           return alert(`${payload.name} is already in contacts`);
//         }
//         state.contacts.push(payload);
//       },

//       prepare: ({ id, name, number }) => {
//         return {
//           payload: {
//             id,
//             name,
//             number,
//           },
//         };
//       },
//     },

//     deleteContact: (state, { payload }) => {
//       state.contacts = state.contacts.filter(
//         ({ id }) => id !== payload
//       );
//     },

//     setFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });
// export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;