export type { IRootState, Action, PayloadAction } from './root.types';
export * as rootReducer from './root.reducer';
export { store, persistor } from './store';
export { rootSaga } from './root.saga';
export { createAction, createPayloadAction } from './root.actions';

