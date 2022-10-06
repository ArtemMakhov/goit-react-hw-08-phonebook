export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getVisibleContacts = (state, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return state.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};