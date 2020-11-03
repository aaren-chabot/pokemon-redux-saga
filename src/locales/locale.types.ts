export interface IAppLocale extends Record<string, string> {
  'home.title': string;
  'home.search-placeholder': string,

  'detail.title': string;
  'detail.primarySubheader': string;
  'detail.secondarySubheader': string;
  'detail.details.pokemon': string;
  'detail.details.special-attack': string;
  'detail.details.types': string;
  'detail.details.resistant': string;
  'detail.details.weaknesses': string;

  'history.title': string;
  'history.default': string,

  'navigation.home': string;
  'navigation.history': string;
  'navigation.pokemon-api': string;
};
