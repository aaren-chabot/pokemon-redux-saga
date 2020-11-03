import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IRootState } from '.';
import { pokemonReducer } from './pokemon';
import { localeReducer } from './locale';

const persistConfig = {
	key: 'pokemon',
	storage,
	whitelist: ['pokemon', 'locale']
};

const rootReducer = combineReducers<IRootState>({
  pokemon: pokemonReducer,
  locale: localeReducer
});

export default persistReducer(persistConfig, rootReducer);
