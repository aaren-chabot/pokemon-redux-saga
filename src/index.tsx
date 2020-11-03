import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { IntlProvider } from 'react-intl';

import App from './App';
import { env } from './environment/environment';
import { store, persistor } from './state';
import { enMessages, frMessages } from './app/locales';

const getLocaleMessages = (locale: string) => {
  if (locale === 'en') return enMessages
  if (locale === 'fr') return frMessages
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider 
        locale={env.DEFAULT_LOCALE} 
        defaultLocale={env.DEFAULT_LOCALE} 
        messages={getLocaleMessages(env.DEFAULT_LOCALE)}>
        <Router>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
