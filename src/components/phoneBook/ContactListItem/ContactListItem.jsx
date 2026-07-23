import React from 'react';
import toast from 'react-hot-toast';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { ListItem, Topic, ItemButton } from './ContactListItem.styled';
import { Spinner } from 'components/Shared/Spinner';

export const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Success delete');
    } catch (error) {
      toast.error('Error delete');
    }
  };

  return (
    <ListItem key={id}>
      <Topic>
        {name} : {phone}
      </Topic>
      <ItemButton disabled={isDeleting} type="button" onClick={handleDelete}>
        {isDeleting ? <Spinner width={16} height={16} /> : 'Delete'}
      </ItemButton>
    </ListItem>
  );
};
