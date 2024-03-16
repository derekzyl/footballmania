import {createStore, applyMiddleware} from 'redux';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middlewares: any[] = [thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// AsyncStorage.clear();

const getStore = () => {
  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger');
    middlewares.push(logger.createLogger());
  }

  const persistedReducer = persistReducer<RootState>(
    persistConfig,
    rootReducer,
  );

  return createStore(persistedReducer, applyMiddleware(...middlewares));
};

const store = getStore();

let persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export {store, persistor};
