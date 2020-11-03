import { createSelector } from 'reselect';
import { IRootState } from '../.';

const selectPokemon = (state: IRootState) => state.pokemon;

export const selectPokemonList = createSelector(
  [selectPokemon],
  pokemon => pokemon.pokemonList
);

export const selectCachedPokemon = createSelector(
  [selectPokemon],
  pokemon => pokemon.cachedPokemon
);

export const selectSelectedPokemonName = createSelector(
  [selectPokemon],
  pokemon => pokemon.selectedPokemon
);

export const selectIsPokemonFetching = createSelector(
  [selectPokemon],
  pokemon => pokemon.isFetching
);

export const selectSelectedPokemonObject = createSelector(
  [selectPokemon],
  pokemon =>
    pokemon.selectedPokemon 
      ? pokemon.cachedPokemon[pokemon.selectedPokemon] 
      : null
);

export const selectCachedPokemonToArray = createSelector(
  [selectPokemon],
  pokemon =>
    [...Object.values(pokemon.cachedPokemon)]
      .sort((a, b) => +new Date(b.viewed) - +new Date(a.viewed) )
);
