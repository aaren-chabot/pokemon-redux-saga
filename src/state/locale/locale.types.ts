import { PayloadAction, Action } from '../root.types';

export interface ILocaleState {
  currentLocale: IApplicationLocales;
};

export enum ILocaleActionEnum {
  SET_LOCALE = 'SET_LOCALE',
  SET_DEFAULT_LOCALE = 'SET_DEFAULT_LOCALE'
};

export type IApplicationLocales = "en" | "fr";

export type ISetLocaleAction = PayloadAction<ILocaleActionEnum.SET_LOCALE, IApplicationLocales>;
export type ISetDefaultLocaleAction = Action<ILocaleActionEnum.SET_DEFAULT_LOCALE>;

export type LocaleActionTypes = ISetLocaleAction | ISetDefaultLocaleAction;
