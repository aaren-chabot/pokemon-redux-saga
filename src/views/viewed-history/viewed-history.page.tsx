import React from 'react';
import { useSelector } from 'react-redux';

import { PokemonSearchCard } from '../../components';
import { selectCachedPokemonToArray } from '../../state/pokemon';
import { ContentContainer } from './viewed-history.styles';

export const ViewedHistoryPage = () => {
  const viewedPokemon = useSelector(selectCachedPokemonToArray);

  return (
    <>
      <h1>Viewed History</h1>
      <ContentContainer>
        {viewedPokemon.length > 0
          ? viewedPokemon.map(
            pokemon => 
              <PokemonSearchCard 
                key={pokemon.number} 
                pokemon={pokemon}
              />)
          : <p>No viewed Pokemon yet</p>
        }
      </ContentContainer>
    </>
  );
};
