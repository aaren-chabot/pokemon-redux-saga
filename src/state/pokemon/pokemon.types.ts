import { PayloadAction, Action } from '../root.types';

export interface IPokemonSearch {
  image: string;
  name: string;
  number: string;
};

export interface IPokemonDetail {
  image: string;
  name: string;
  number: string;
  weight?: string;
  height?: string;
  classification: string;
  types: string[];
  resistant: string[]
  attacks: {
    fast: IAttack[];
    special: IAttack[]
  }
  weaknesses: string[];
  fleeRate?: number;
  maxCP?: number;
  evolutions?: IPokemonDetail[]
  evolutionRequirements?: {
    amount: number;
    name: string;
  }
  maxHP?: number;
  viewed: string;
};

interface IAttack {
  name: string;
  type: string;
  damage: number;
};

export interface IPokemonState {
  pokemonList: IPokemonSearch[];
  cachedPokemon: {
    [key: string]: IPokemonDetail;
  },
  selectedPokemon: string | null;
  isFetching: boolean;
}; 

export enum IPokemonActionEnum {
  FETCH_ALL_POKEMON_START = 'FETCH_ALL_POKEMON_START',
	FETCH_ALL_POKEMON_SUCCESS = 'FETCH_ALL_POKEMON_SUCCESS',
	FETCH_ALL_POKEMON_FAILURE = 'FETCH_ALL_POKEMON_FAILURE',
	FETCH_POKEMON_START = 'FETCH_POKEMON_START',
	FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS',
	FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE',
};

export type IFetchAllPokemonStart = Action<IPokemonActionEnum.FETCH_ALL_POKEMON_START>;
export type IFetchAllPokemonSuccess = PayloadAction<IPokemonActionEnum.FETCH_ALL_POKEMON_SUCCESS, IPokemonSearch[]>;
export type IFetchAllPokemonFailure = PayloadAction<IPokemonActionEnum.FETCH_ALL_POKEMON_FAILURE, Error>;
export type IFetchPokemonStart = PayloadAction<IPokemonActionEnum.FETCH_POKEMON_START, string>;
export type IFetchPokemonSuccess = PayloadAction<IPokemonActionEnum.FETCH_POKEMON_SUCCESS, IPokemonDetail>;
export type IFetchPokemonFailure = PayloadAction<IPokemonActionEnum.FETCH_POKEMON_FAILURE, Error>;

export type PokemonActionTypes = IFetchAllPokemonSuccess | IFetchAllPokemonStart | IFetchAllPokemonFailure | IFetchPokemonStart | IFetchPokemonSuccess | IFetchPokemonFailure;
