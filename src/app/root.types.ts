import { PersistedState } from 'redux-persist';

import { IPokemonState } from '../modules/pokemon/state/pokemon.types';

interface IPersistedState {
  _persist: PersistedState
}

export interface IRootState extends IPersistedState {
  pokemon: IPokemonState,
}
