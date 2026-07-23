import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { ContactForm } from './phoneBook/ContactForm';
import { ContactFilter } from './phoneBook/ContactFilter';
import { Contacts } from './phoneBook/Contacts';
import { MainTitle } from './phoneBook/Contacts/ContactList.styled';
import { Pokemons } from './Pokemons';

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
