import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { enMessages, frMessages, IAppLocale } from '../../locales';
import { IApplicationLocales } from '../../state/locale';
import { env } from '../../environment/environment';
import { selectCurrentLocale } from '../../state/locale';

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const lang = useSelector(selectCurrentLocale);

  const getLocaleMessages = (locale: IApplicationLocales): IAppLocale => {
    if (locale === 'en') return enMessages;
    if (locale === 'fr') return frMessages;

    console.log(`Locale ${locale} not found. Return defaut locale ${env.DEFAULT_LOCALE}`);
    return enMessages
  };

  return (
    <IntlProvider 
      locale={env.DEFAULT_LOCALE} 
      defaultLocale={env.DEFAULT_LOCALE} 
      messages={(getLocaleMessages(lang))}>
        {children}
    </IntlProvider>
  );
};
