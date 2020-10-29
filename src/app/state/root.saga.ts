import { all, call } from 'redux-saga/effects';

import { pokemonSaga } from '../../modules/pokemon/state/pokemon.saga';

export function* rootSaga() {
	yield all([
		call(pokemonSaga),
	])
}
