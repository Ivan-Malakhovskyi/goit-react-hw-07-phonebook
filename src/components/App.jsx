import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { serviceContacts } from 'redux/operations';
import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { ContactFilter } from './phoneBook/ContactFilter/ContactFilter';
import { MainTitle, Title } from './phoneBook/ContactList/ContactList.styled';
import { ContactForm } from './phoneBook/ContactForm/ContactForm';
import { ContactList } from './phoneBook/ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(serviceContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainTitle>Phone book</MainTitle>

      <ContactForm />

      <Title>Contacts</Title>

      {isLoading && !error && (
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Завантажуємо дані👌...
        </p>
      )}

      <ContactFilter />

      <ContactList />

      <GlobalStyle />
    </Layout>
  );
};
