import { createSelector } from 'reselect';
import { IRootState } from '../.';

export const selectLocaleState = (state: IRootState) => state.locale;

export const selectCurrentLocale = createSelector(
  [selectLocaleState],
  locale => locale.currentLocale
);
