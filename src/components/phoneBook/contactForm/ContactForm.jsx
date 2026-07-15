import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import {
  Main,
  ContactCreateForm,
  LabelForm,
  FieldForm,
  ErrorMsg,
  Buttons,
} from './contactForm.styled';

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
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

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

    dispatch(addContact({ name, phone }));

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
        <Buttons type="submit">Add to contact</Buttons>
        <Toaster />
      </ContactCreateForm>
    </Main>
  );
};
