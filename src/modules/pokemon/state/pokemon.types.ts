export interface IPokemonSearch {
  image: string;
  name: string;
  number: string;
}

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
}

interface IAttack {
  name: string;
  type: string;
  damage: number;
}

export interface IPokemonState {
  pokemonList: IPokemonSearch[];
  cachedPokemon: {
    [key: string]: IPokemonDetail;
  },
  selectedPokemon: string | null;
  isFetching: boolean;
};

export const PokemonActionTypes = {
  FETCH_ALL_POKEMON_START: 'FETCH_ALL_POKEMON_START',
	FETCH_ALL_POKEMON_SUCCESS: 'FETCH_ALL_POKEMON_SUCCESS',
	FETCH_ALL_POKEMON_FAILURE: 'FETCH_ALL_POKEMON_FAILURE',
	FETCH_POKEMON_START: 'FETCH_POKEMON_START',
	FETCH_POKEMON_SUCCESS: 'FETCH_POKEMON_SUCCESS',
	FETCH_POKEMON_FAILURE: 'FETCH_POKEMON_FAILURE',
}

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
