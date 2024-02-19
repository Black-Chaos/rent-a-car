import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  fetchCars,
  getCarsById,
  getCarsByParams,
  getFavoriteCars,
} from './operation';

const handlePending = state => ({ ...state, isLoading: true });
const handleError = (state, { payload }) => ({
  ...state,
  isLoading: false,
  error: payload,
});

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    selectedCar: {},
    favoriteItems: [],
    favoriteCarsId: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavorite(state, { payload }) {
      const idx = state.favoriteCarsId.indexOf(payload);
      if (idx === -1) {
        state.favoriteCarsId.push(payload);
      } else {
        state.favoriteItems.splice(idx, 1);
        state.favoriteCarsId.splice(idx, 1);
      }
    },
  },
  extraReducers: build =>
    build
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.items.push(...payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCarsByParams.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCarsByParams.rejected, (state, { payload }) => {
        if (payload.response.status === 404) {
          state.items = [];
        };
      })
      .addCase(getCarsById.fulfilled, (state, { payload }) => {
        state.selectedCar = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getFavoriteCars.fulfilled, (state, { payload }) => {
        state.favoriteItems = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(
          fetchCars.pending,
          getCarsById.pending,
          getCarsByParams.pending,
          getFavoriteCars.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getCarsById.rejected,
          fetchCars.rejected,
          getFavoriteCars.rejected,
          getCarsByParams.rejected
        ),
        handleError
      ),
});

const persistConfig = {
  key: 'favoriteCarsId',
  storage,
  whitelist: ['favoriteCarsId'],
};

export const { toggleFavorite } = carSlice.actions;
export const carsReducer = persistReducer(persistConfig, carSlice.reducer);
