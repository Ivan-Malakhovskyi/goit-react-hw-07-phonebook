import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import {
  Main,
  LabelForm,
  FieldForm,
  ErrorMsg,
  Buttons,
} from './ContactForm.styled';

import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { Spinner } from 'components/Shared/Spiner';
import { ContactCreateForm } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  phone: yup
    .string()
    .min(5, 'Too short  phone number')
    .max(12, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
});

export const ContactForm = () => {
  const [addContact, { isLoading, isError }] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} already exists.`);
      resetForm();
      return;
    }

    if (isError) {
      toast.error('Some error');
      return;
    }

    addContact({ name, phone });

    toast.success(`${name} has succesfully added to your phonebook`);
    resetForm();
  };

  return (
    <Main
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactCreateForm>
        <LabelForm htmlFor="name">
          Name
          <FieldForm
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMsg name="name" component="p" />
        </LabelForm>

        <LabelForm htmlFor="phone">
          Phone number
          <FieldForm type="tel" name="phone" required />
          <ErrorMsg name="phone" component="p" />
        </LabelForm>
        <Buttons type="submit" disabled={isLoading}>
          {isLoading ? <Spinner width={16} height={16} /> : 'Create'}
        </Buttons>
        <Toaster />
      </ContactCreateForm>
    </Main>
  );
};
