import { Reducer } from 'redux';
import { ensureNever } from '../root.actions';
import { 
  IPokemonState, 
  IPokemonActionEnum,
  PokemonActionTypes,
  IFetchAllPokemonStart,
  IFetchAllPokemonSuccess,
  IFetchAllPokemonFailure,
  IFetchPokemonStart,
  IFetchPokemonSuccess,
  IFetchPokemonFailure
} from '.';

export const initPokemonState: IPokemonState = {
  pokemonList: [],
  cachedPokemon: {},
  selectedPokemon: null,
  isFetching: false
};

const fetchAllPokemonStart = (state: IPokemonState, action: IFetchAllPokemonStart): IPokemonState => 
  ({...state, isFetching: true});
const fetchAllPokemonSuccess = (state: IPokemonState, action: IFetchAllPokemonSuccess): IPokemonState => 
  ({...state, isFetching: false, pokemonList: action.payload});
const fetchAllPokemonError = (state: IPokemonState, action: IFetchAllPokemonFailure): IPokemonState => 
  ({...state, isFetching: true});

const fetchPokemonStart = (state: IPokemonState, action: IFetchPokemonStart): IPokemonState => 
  ({...state, isFetching: true, selectedPokemon: action.payload});
const fetchPokemonSuccess = (state: IPokemonState, action: IFetchPokemonSuccess): IPokemonState => 
  ({
    ...state, 
    isFetching: false, 
    cachedPokemon: {
      ...state.cachedPokemon,
      [action.payload.name]: {
        ...action.payload,
        viewed: new Date().toLocaleString()
      }
    }});
const fetchPokemonError = (state: IPokemonState, action: IFetchPokemonFailure): IPokemonState => 
  ({...state, isFetching: true, selectedPokemon: null});

export const pokemonReducer: Reducer<IPokemonState, PokemonActionTypes> = (
  state = initPokemonState, 
  action
): IPokemonState => {
	switch (action.type) {
		case IPokemonActionEnum.FETCH_ALL_POKEMON_START:
			return fetchAllPokemonStart(state, action);
    case IPokemonActionEnum.FETCH_ALL_POKEMON_SUCCESS:
			return fetchAllPokemonSuccess(state, action);
		case IPokemonActionEnum.FETCH_ALL_POKEMON_FAILURE:
			return fetchAllPokemonError(state, action);

    case IPokemonActionEnum.FETCH_POKEMON_START:
			return fetchPokemonStart(state, action);
		case IPokemonActionEnum.FETCH_POKEMON_SUCCESS:
			return fetchPokemonSuccess(state, action);
		case IPokemonActionEnum.FETCH_POKEMON_FAILURE:
			return fetchPokemonError(state, action);
		default:
      ensureNever(action);
			return state;
	}
};
