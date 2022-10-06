import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState =
{
  contacts: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        if (state.contacts.find(({ name }) => name === payload.name)) {
          return alert(`${payload.name} is already in contacts`);
        }
        state.contacts.push(payload);
      },

      prepare: ({ id, name, number }) => {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },

    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(
        ({ id }) => id !== payload
      );
    },

    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;