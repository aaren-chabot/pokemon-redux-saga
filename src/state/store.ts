import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as reduxLogger from "redux-logger";

import { env } from '../environment/environment';
import { rootReducer } from ".";
import { rootSaga } from "./root.saga";

const logger = (reduxLogger.createLogger as any)();
const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (env.IS_LOGGING_ENABLED) {
  middlewares.push(logger);
};

const store: Store<any> = createStore(
  rootReducer.default, 
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
