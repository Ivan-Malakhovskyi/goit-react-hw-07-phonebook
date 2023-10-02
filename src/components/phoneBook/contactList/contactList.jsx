import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Topic, ItemButton } from './contactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <Topic>
            {contact.name} : {contact.number}
          </Topic>
          <ItemButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </ItemButton>
        </ListItem>
      ))}
    </List>
  );
};
