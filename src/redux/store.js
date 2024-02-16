import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const { configureStore } = require('@reduxjs/toolkit');
const { filterReducer } = require('./cars/filterSlice');
const { carsReducer } = require('./cars/carSlice');

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        filter: filterReducer,
    },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore