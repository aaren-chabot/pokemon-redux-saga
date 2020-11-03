import { Reducer } from 'redux';
import { env } from '../../environment/environment';
import { ensureNever } from '../root.actions';
import { ILocaleState, ILocaleActionEnum, LocaleActionTypes, ISetLocaleAction, ISetDefaultLocaleAction } from '.';

const initLocale = () => {
  if (window) {
    if (navigator.language.includes('en')) return 'en';
    if (navigator.language.includes('fr')) return 'fr';
  }
  return env.DEFAULT_LOCALE;
};

export const initLocaleState: ILocaleState = {
  currentLocale: initLocale()
};

const setLocale = (state: ILocaleState, action: ISetLocaleAction): ILocaleState => 
  ({...state, currentLocale: action.payload});

const setDefaultLocale = (state: ILocaleState, action: ISetDefaultLocaleAction): ILocaleState => 
  ({...state, currentLocale: env.DEFAULT_LOCALE});

export const localeReducer: Reducer<ILocaleState, LocaleActionTypes> = (
  state = initLocaleState, 
  action: LocaleActionTypes
): ILocaleState => {
	switch (action.type) {
		case ILocaleActionEnum.SET_LOCALE:
      return setLocale(state, action);
    case ILocaleActionEnum.SET_DEFAULT_LOCALE:
      return setDefaultLocale(state, action);
		default:
      ensureNever(action);
			return state;
	};
};
