import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { ContactForm, Contacts, ContactFilter } from './phoneBook';
import { MainTitle } from './phoneBook/Contacts/ContactList.styled';
import { Pokemons } from './Pokemons/Pokemons';

export const App = () => {
  return (
    <Layout>
      <MainTitle>Phone book</MainTitle>

      <Pokemons />

      <ContactForm />

      <ContactFilter />

      <Contacts />

      <GlobalStyle />
    </Layout>
  );
};
