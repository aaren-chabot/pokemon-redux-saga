import { IApplicationLocales } from '../state/locale';

export interface IEnv {
  CURRENT_ENV: 'base' | 'DEV' | 'QA' | 'PROD';
  POKEMON_API: string;
  IS_LOGGING_ENABLED: boolean;
  DEFAULT_LOCALE: IApplicationLocales;
};
