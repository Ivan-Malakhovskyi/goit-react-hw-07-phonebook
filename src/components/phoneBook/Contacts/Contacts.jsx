import React from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { ContactList } from './ContactList';
import { Title } from './ContactList.styled';
import { Spinner } from 'components/Shared/Spinner';
import { Section } from 'components/Shared/Shared.styled';

export const Contacts = () => {
  const { data, isError, isFetching } = useGetContactsQuery();

  return (
    <>
      <Section>
        <Title>Contacts</Title>

        {data && !isError && <ContactList contacts={data} />}
      </Section>

      {isFetching && !isError && <Spinner />}
    </>
  );
};
