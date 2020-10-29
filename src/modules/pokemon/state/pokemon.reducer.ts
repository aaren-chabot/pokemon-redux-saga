import { PayloadAction } from '@reduxjs/toolkit'
import { 
  IPokemonState, 
  PokemonActionTypes, 
  IPokemonSearch, 
  IPokemonDetail,
} from './pokemon.types';

const INITIAL_STATE: IPokemonState = {
  pokemonList: [],
  cachedPokemon: {},
  selectedPokemon: null,
  isFetching: false
};

export const pokemonReducer = (
  state = INITIAL_STATE, 
  action: PayloadAction<IPokemonSearch[] | string | IPokemonDetail>
): IPokemonState => {
	switch (action.type) {
		case PokemonActionTypes.FETCH_ALL_POKEMON_START:
			return {
				...state,
				isFetching: true
			};
		case PokemonActionTypes.FETCH_ALL_POKEMON_SUCCESS:
			return {
				...state,
				isFetching: false,
				pokemonList: (action.payload as IPokemonSearch[])
			};
		case PokemonActionTypes.FETCH_ALL_POKEMON_FAILURE:
			return {
				...state,
				isFetching: false
      };

    case PokemonActionTypes.FETCH_POKEMON_START:
			return {
        ...state,
				isFetching: true,
        selectedPokemon: (action.payload as string)
			};
		case PokemonActionTypes.FETCH_POKEMON_SUCCESS:
			return {
				...state,
				isFetching: false,
				cachedPokemon: {
          ...state.cachedPokemon,
          [(action.payload as IPokemonDetail).name]: {
            ...(action.payload as IPokemonDetail),
            viewed: (new Date()).toLocaleString()
          }
        }
			};
		case PokemonActionTypes.FETCH_POKEMON_FAILURE:
			return {
				...state,
        isFetching: false,
        selectedPokemon: null
			};
		default:
			return state;
	}
};
