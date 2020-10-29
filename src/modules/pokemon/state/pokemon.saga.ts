import { takeLatest, all, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit'
import { env } from '../../../environment/environment'

import { 
  fetchAllPokemonSuccess, 
  fetchAllPokemonFailure, 
  fetchPokemonSuccess, 
  fetchPokemonFailure
} from './pokemon.actions';

import { 
  PokemonActionTypes, 
  allPokemonQuery,
  pokemonQuery
} from './pokemon.types';

export function* fetchAllPokemonAsync() {
  yield console.log('fetchAllPokemonAsync fired');
  try {
    const response = yield fetch(
      env.POKEMON_API, {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          query: allPokemonQuery,
          variables: {first: 151}, // Number of 1st gen Pokemon
        }),
    });

    const {data} = yield response.json();
    if (response.ok && data?.pokemons) {
      yield put(fetchAllPokemonSuccess(data.pokemons))
    } else {
      return Promise.reject(new Error('There was an issue with the graphql response'))
    }

  } catch(error) {
    put(fetchAllPokemonFailure(error));
  }
}

export function* fetchPokemonAsync(action: PayloadAction) {
  yield console.log('fetchPokemonAsync fired');

try {
    const response = yield fetch(
      env.POKEMON_API, {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          query: pokemonQuery,
          variables: {name: action.payload},
        }),
    });

    const {data} = yield response.json();
    if (response.ok && data?.pokemon) {
      yield put(fetchPokemonSuccess(data.pokemon))
    } else {
      return Promise.reject(new Error('There was an issue with the graphql response'))
    }

  } catch(error) {
    put(fetchPokemonFailure(error));
  }
}

export function* fetchAllPokemonStart() {
	yield takeLatest(
		PokemonActionTypes.FETCH_ALL_POKEMON_START,
		fetchAllPokemonAsync
	);
}

export function* fetchPokemonStart() {
	yield takeLatest(
    PokemonActionTypes.FETCH_POKEMON_START,
    fetchPokemonAsync
	);
}

export function* pokemonSaga() {
	yield all([
		call(fetchAllPokemonStart),
		call(fetchPokemonStart)
	])
}
