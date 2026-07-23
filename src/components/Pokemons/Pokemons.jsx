import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from 'redux/pokemons';

export const Pokemons = () => {
  const [pokemon, setPokemon] = useState('');

  const { error, data, isFetching, isError } = useGetPokemonByNameQuery(
    pokemon,
    {
      skip: pokemon === '',
      // pollingInterval: 4000,
    }
  );
  console.log('🚀 ~ Pokemons ~ isFetching:', isFetching);
  console.log('🚀 ~ Pokemons ~ data:', data);
  console.log('🚀 ~ Pokemons ~ error:', error);

  const handleSubmit = (values, { resetForm }) => {
    const { pokemonName } = values;

    setPokemon(pokemonName);

    resetForm();
  };

  const showError = isError && error.code === '404';
  const showData = data && !isFetching && !isError;

  return (
    <div>
      <Formik
        initialValues={{
          pokemonName: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="pokemonName" />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      {showData && data.name}

      {isFetching && <div>Loading ....</div>}

      {showError && <div>{error.data}</div>}
    </div>
  );
};
