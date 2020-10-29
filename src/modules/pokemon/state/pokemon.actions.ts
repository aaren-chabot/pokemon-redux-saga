import { 
  PokemonActionTypes, 
  IPokemonSearch, 
  IPokemonDetail,
} from './pokemon.types';

export const fetchAllPokemonStart = () => ({
	type: PokemonActionTypes.FETCH_ALL_POKEMON_START
});

export const fetchAllPokemonSuccess = (pokemons: IPokemonSearch) => ({
	type: PokemonActionTypes.FETCH_ALL_POKEMON_SUCCESS,
	payload: pokemons
});

export const fetchAllPokemonFailure = (error: Error) => ({
	type: PokemonActionTypes.FETCH_ALL_POKEMON_FAILURE,
	payload: error
});

export const fetchPokemonStart = (pokemonName: string) => ({
  type: PokemonActionTypes.FETCH_POKEMON_START,
  payload: pokemonName
});

export const fetchPokemonSuccess = (pokemon: IPokemonDetail) => ({
	type: PokemonActionTypes.FETCH_POKEMON_SUCCESS,
	payload: pokemon
});

export const fetchPokemonFailure = (error: Error) => ({
	type: PokemonActionTypes.FETCH_POKEMON_FAILURE,
	payload: error
});
