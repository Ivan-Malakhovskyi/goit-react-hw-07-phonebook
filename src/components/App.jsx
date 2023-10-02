import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { Filter } from './phoneBook/contactFilter/conatactFilter';
import { MainTitle, Title } from './phoneBook/contactList/contactList.styled';
import { FormUser } from './phoneBook/contactForm/contactForm';
import { ContactList } from './phoneBook/contactList/contactList';

export const App = () => {
  return (
    <Layout>
      <MainTitle>Phone book</MainTitle>

      <FormUser />

      <Title>Contacts</Title>

      <Filter />

      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
