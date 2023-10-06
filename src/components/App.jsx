import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Filter } from './phoneBook/contactFilter/conatactFilter';
import { MainTitle, Title } from './phoneBook/contactList/contactList.styled';
import { FormUser } from './phoneBook/contactForm/contactForm';
import { ContactList } from './phoneBook/contactList/contactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { serviceContacts } from 'redux/operations';

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

      <FormUser />

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

      <Filter />

      <ContactList />

      <GlobalStyle />
    </Layout>
  );
};
