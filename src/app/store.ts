import { createStore, applyMiddleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root.reducer';
import { rootSaga } from "./root.saga";

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];

const store: Store<any> = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {store, persistor};
