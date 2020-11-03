import { takeLatest, all, call, put } from 'redux-saga/effects';
import { env } from '../../environment/environment'

import {
  fetchAllPokemonSuccess,
  fetchAllPokemonFailure,
  fetchPokemonSuccess,
  fetchPokemonFailure,
  IPokemonActionEnum,
  IFetchPokemonStart
} from '.';

export const pokemonQuery = `
    query PokemonInfo($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        image
        classification
        types
        resistant
        weaknesses
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `;

  export const allPokemonQuery = `
    query PokemonInfo($first: Int!) {
      pokemons(first: $first) {
        image
        name
    		number
      }
    }
  `;

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

export function* fetchPokemonAsync(action: IFetchPokemonStart) {
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
		IPokemonActionEnum.FETCH_ALL_POKEMON_START,
		fetchAllPokemonAsync
	);
}

export function* fetchPokemonStart() {
	yield takeLatest(
    IPokemonActionEnum.FETCH_POKEMON_START,
    fetchPokemonAsync
	);
}

export function* pokemonSaga() {
	yield all([
		call(fetchAllPokemonStart),
		call(fetchPokemonStart)
	])
}
