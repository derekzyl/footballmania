// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { TypedUseSelectorHook, useSelector } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/root';

// const middlewares: any[] = [thunk];

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// // AsyncStorage.clear();

// const getStore = () => {
//   if (process.env.NODE_ENV !== 'production') {
//     // const logger = require('redux-logger');
//     // middlewares.push(logger.createLogger());
//   }

//   const persistedReducer = persistReducer<RootState>(
//     persistConfig,
//     rootReducer,
//   );

//   return createStore(persistedReducer, applyMiddleware(...middlewares));
// };

// const store = getStore();

// let persistor = persistStore(store);

// export type RootState = ReturnType<typeof rootReducer>;

// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

// export { persistor, store };

import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import rootReducer from './reducers/root'; // Assume rootReducer is a combined reducer

// Define a persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middlewares = [thunk];

// Create a Redux store using Redux Toolkit
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

// Create a persistor instance
const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export { persistor, store };
