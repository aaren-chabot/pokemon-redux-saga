export type { ILocaleState, IApplicationLocales, LocaleActionTypes, ISetLocaleAction, ISetDefaultLocaleAction } from './locale.types';
export { ILocaleActionEnum } from './locale.types';
export { localeReducer, initLocaleState } from './locale.reducer';
export { setLocale } from './locale.actions';
export { selectLocaleState, selectCurrentLocale } from './locale.selectors';
