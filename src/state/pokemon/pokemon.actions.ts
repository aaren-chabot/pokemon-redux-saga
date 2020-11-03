import { createPayloadAction, createAction } from '../root.actions';
import { 
  IPokemonActionEnum,
  IPokemonSearch, 
  IPokemonDetail,
  IFetchAllPokemonStart,
  IFetchAllPokemonSuccess,
  IFetchAllPokemonFailure,
  IFetchPokemonStart,
  IFetchPokemonSuccess,
  IFetchPokemonFailure
} from '.';


export const fetchAllPokemonStart = (): IFetchAllPokemonStart => 
  createAction(IPokemonActionEnum.FETCH_ALL_POKEMON_START);

export const fetchAllPokemonSuccess = (pokemon: IPokemonSearch[]): IFetchAllPokemonSuccess =>
  createPayloadAction(IPokemonActionEnum.FETCH_ALL_POKEMON_SUCCESS, pokemon);

export const fetchAllPokemonFailure = (error: Error): IFetchAllPokemonFailure =>
  createPayloadAction(IPokemonActionEnum.FETCH_ALL_POKEMON_FAILURE, error);

export const fetchPokemonStart = (pokemonName: string): IFetchPokemonStart =>
  createPayloadAction(IPokemonActionEnum.FETCH_POKEMON_START, pokemonName);

export const fetchPokemonSuccess = (pokemonDetail: IPokemonDetail): IFetchPokemonSuccess =>
  createPayloadAction(IPokemonActionEnum.FETCH_POKEMON_SUCCESS, pokemonDetail);

export const fetchPokemonFailure = (error: Error): IFetchPokemonFailure =>
  createPayloadAction(IPokemonActionEnum.FETCH_POKEMON_FAILURE, error);
