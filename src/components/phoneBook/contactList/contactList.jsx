import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Topic, ItemButton } from './contactList.styled';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { EmptyMessage } from './emptyMessage';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <Topic>
            {contact.name} : {contact.phone}
          </Topic>
          <ItemButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </ItemButton>
        </ListItem>
      ))}
      {contacts && contacts.length === 0 && <EmptyMessage />}
    </List>
  );
};
