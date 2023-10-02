import * as yup from 'yup';
import {
  Main,
  ContactForm,
  LabelForm,
  FieldForm,
  ErrorMsg,
  Buttons,
} from './contactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { addContacts } from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]*$/, 'Name should not contain numbers')
    .required(),
  number: yup
    .string()
    .min(5, 'Too short  phone number')
    .max(10, 'Too long phone number')
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Invalid phone number format'
    )
    .required(),
});

export const FormUser = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      toast.error(`${name} already exists.`);
      resetForm();
      return;
    }

    dispatch(addContacts(name, number));

    const updatedContacts = [...contacts, { name, number }];
    window.localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    toast.success(`${name} has succesfully added to your phonebook`);
    resetForm();
  };

  return (
    <Main
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm>
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

        <LabelForm htmlFor="number">
          Phone number
          <FieldForm type="tel" name="number" required />
          <ErrorMsg name="number" component="p" />
        </LabelForm>
        <Buttons type="submit">Add to contact</Buttons>
        <Toaster />
      </ContactForm>
    </Main>
  );
};
