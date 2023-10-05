import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Filter } from './phoneBook/contactFilter/conatactFilter';
import { MainTitle, Title } from './phoneBook/contactList/contactList.styled';
import { FormUser } from './phoneBook/contactForm/contactForm';
import { ContactList } from './phoneBook/contactList/contactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { serviceContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(serviceContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainTitle>Phone book</MainTitle>

      <FormUser />

      <Title>Contacts</Title>

      {isLoading && !error && <b>Request in progress...</b>}

      <Filter />

      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
