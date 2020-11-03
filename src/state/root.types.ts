import { Action as ReduxAction } from 'redux';

export type IRootState = {
  pokemon: import('./pokemon').IPokemonState;
  locale: import('./locale').ILocaleState;
};

export type Action<Type, Meta = void> =
  ReduxAction<Type> & {  meta?: Meta};
export type PayloadAction<Type, Payload, Meta = void> = 
  Action<Type, Meta> & { readonly payload: Payload};
