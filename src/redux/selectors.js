import { createSelector } from "@reduxjs/toolkit";

export const selectContact = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const selectFilter = state => state.contacts.filter;



export const selectVisibleContacts = createSelector(
  [selectFilter, selectContact],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
  
