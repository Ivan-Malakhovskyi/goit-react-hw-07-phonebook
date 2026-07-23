import { List } from './ContactList.styled';
import { EmptyMessage } from './EmptyMessage';
import { ContactListItem } from '../ContactListItem';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
      {contacts && contacts.length === 0 && <EmptyMessage />}
    </List>
  );
};
