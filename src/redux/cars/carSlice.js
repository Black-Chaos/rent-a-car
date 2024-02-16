import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchCars, getCarsById, getCarsByParams, getFavoriteCars } from './operation';

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
        addToFavorite(state, { payload }) {
            state.favoriteItems.push(payload);
        },
        removeToFavorite(state, { payload }) {
            const idx = state.favoriteCarsId.indexOf(payload);
            if (idx === -1) return state;
            state.favoriteItems.splice(idx, 1);
            state.favoriteCarsId.splice(idx, 1);
        },
    },
    extraReducers: build =>
        build
            .addCase(fetchCars.fulfilled, (state, { payload }) => {
                state.items.push(payload);
                state.isLoading = false;
                state.error = null;
            })
            .addCase(getCarsByParams.fulfilled, (state, { payload }) => {
                state.items = payload;
                state.isLoading = false;
                state.error = null;
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
            }),
});

const persistConfig = {
    key: 'favoriteCarsId',
    storage,
    whitelist: ['favoriteCarsId'],
};

export const { addToFavorite, removeToFavorite } = carSlice.actions;
export const carsReducer = persistReducer(persistConfig, carSlice.reducer);
