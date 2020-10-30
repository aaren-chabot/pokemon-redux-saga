import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { env } from './environment/environment';

import { Header } from './app/header/header.component';
import ErrorBoundary from './common/error-boundary/error-boundary.component';
import { Loader } from './common/loader';

import { GlobalStyle, GlobalResetStyles } from './styles';
import { ContentContainer } from './App.styles';

const HomePage = lazy<any>(() => import('./views/home/home.page').then(res => ({default: res.HomePage})));
const PokemonDetailPage = lazy<any>(() => import('./views/pokemon-detail/pokemon-detail.page').then(res => ({default: res.PokemonDetailPage})));
const ViewedHistoryPage = lazy<any>(() => import('./views/viewed-history/viewed-history.page').then(res => ({default: res.ViewedHistoryPage})));

function App() {
  console.log('Env:', env.CURRENT_ENV);
  return (
    <div>
      <GlobalResetStyles />
      <GlobalStyle />
      <Header />
      <Switch>
        <ContentContainer>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/search-history' component={ViewedHistoryPage} />
              <Route exact path='/pokemon/:id' component={PokemonDetailPage} />
            </Suspense>
          </ErrorBoundary>
        </ContentContainer>
      </Switch>
    </div>
  );
};

export default App;
