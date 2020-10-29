import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { pokemonReducer } from '../modules/pokemon/state/pokemon.reducer';
import { IRootState } from './root.types';

const persistConfig = {
	key: 'pokemon',
	storage,
	whitelist: ['pokemon']
};

const rootReducer = combineReducers<IRootState>({
  pokemon: pokemonReducer
});

export default persistReducer(persistConfig, rootReducer);
