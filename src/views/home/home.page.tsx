import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useRenderLocale } from '../../util';
import { Loader, PokemonSearchCard, SearchInput } from '../../components';
import { selectPokemonList, selectIsPokemonFetching } from '../../state/pokemon';
import { SearchResultsContainer, SearchInputContainer } from './home.styles';

export const HomePage = () => {
  const pokemonList = useSelector(selectPokemonList);
  const isFetching = useSelector(selectIsPokemonFetching);
  const [search, setSearch] = useState('');
  const [title, searchPlaceholder] = useRenderLocale(['home.title', 'home.search-placeholder']);

  if (isFetching) {
    return <Loader />
  };

  return (
    <>
      <h1>{title}</h1>
      <SearchInputContainer>
        <SearchInput 
          search={search} 
          handleChange={setSearch} 
          placeholder={searchPlaceholder} 
        />
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
