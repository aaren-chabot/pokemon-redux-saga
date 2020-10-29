import React from 'react';
import { useSelector } from 'react-redux';

import { PokemonSearchCard } from '../../modules/pokemon/pokemon-search-card/pokemon-search-card.component';

import { selectCachedPokemonToArray } from '../../modules/pokemon/state/pokemon.selectors';

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
