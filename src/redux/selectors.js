//* Підписка на store здійснюється за допомогою хука useSelector

export const getContacts = state => state.contacts.list;

export const getFilter = state => state.filter;
