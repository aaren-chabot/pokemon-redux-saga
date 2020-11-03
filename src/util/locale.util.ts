import { useIntl } from 'react-intl';
// import { IAppLocale } from '../locales';

export const useRenderLocale = (ids: string[] ): string[] => {
  const intl = useIntl();
  const localizedStrings: string[] = [];

  ids.forEach((id) => {
    localizedStrings.push(intl.formatMessage({id}));
  });

  return localizedStrings;
};
