import { createPayloadAction, createAction } from '../root.actions';
import { IApplicationLocales, ILocaleActionEnum, ISetLocaleAction, ISetDefaultLocaleAction } from '.';

export const setLocale = (locale: IApplicationLocales): ISetLocaleAction => 
  createPayloadAction(ILocaleActionEnum.SET_LOCALE, locale);

export const setDefaultLocale = (): ISetDefaultLocaleAction => 
  createAction(ILocaleActionEnum.SET_DEFAULT_LOCALE);
