import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { Loader } from '../../common/loader';
import { PokemonSearchCard } from '../../modules/pokemon/pokemon-search-card/pokemon-search-card.component';
import { SearchInput } from '../../modules/pokemon/search-input/search-input.component';

import { selectPokemonList, selectIsPokemonFetching } from '../../state/pokemon';

import { SearchResultsContainer, SearchInputContainer } from './home.styles';

export const HomePage = () => {
  const pokemonList = useSelector(selectPokemonList);
  const isFetching = useSelector(selectIsPokemonFetching);
  const intl = useIntl();
  const [search, setSearch] = useState('');

  if (isFetching) {
    return <Loader />
  }

  return (
    <>
      <h1>{intl.formatMessage({id: 'home.welcome'})}</h1>
      <SearchInputContainer>
        <SearchInput search={search} handleChange={setSearch} />
      </SearchInputContainer>
      <SearchResultsContainer>
        { pokemonList
          .filter(pokemon => 
            pokemon.name.toLowerCase().match(`${search.toLowerCase()}`))
          .map(
          pokemon => 
            <PokemonSearchCard 
              key={pokemon.number} 
              pokemon={pokemon} />
            ) 
        }
      </SearchResultsContainer>
    </>
  );
};
