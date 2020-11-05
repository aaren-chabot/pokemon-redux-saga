import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { useRenderLocale } from '../../util';
import { PokemonSearchCard } from '../../components';
import { selectCachedPokemonToArray } from '../../state/pokemon';
import { ContentContainer } from './viewed-history.styles';

export interface IViewedHistoryPage {};

export const ViewedHistoryPage: FC<IViewedHistoryPage> = () => {
  const [title, defaultLabel] = useRenderLocale(['history.title', 'history.default']);
  const viewedPokemon = useSelector(selectCachedPokemonToArray);

  return (
    <>
      <h1>{title}</h1>
      <ContentContainer>
        {viewedPokemon.length > 0
          ? viewedPokemon.map(
            pokemon => 
              <PokemonSearchCard 
                key={pokemon.number} 
                pokemon={pokemon}
              />)
          : <p>{defaultLabel}</p>
        }
      </ContentContainer>
    </>
  );
};
