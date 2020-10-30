import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import { rootSaga } from "./root.saga";
import * as reduxLogger from "redux-logger";

import { env } from '../../environment/environment';

const logger = (reduxLogger.createLogger as any)(); // https://github.com/LogRocket/redux-logger/issues/89
const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (env.IS_LOGGING_ENABLED) {
  middlewares.push(logger);
};

const store: Store<any> = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
