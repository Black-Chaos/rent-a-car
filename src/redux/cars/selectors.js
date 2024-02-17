import { createSelector } from "@reduxjs/toolkit";

export const selectItems = store => store.cars.items;
export const selectIsLoading = store => store.cars.isLoading;
export const selectError = store => store.cars.error;

export const selectFilter = store => store.filter;

export const selectFiltredCars = createSelector(
    [selectItems, selectFilter],
    (cars, { mileageTo, mileageFrom }) => {
        if (mileageTo === 0) {
            return cars;
        }
        return cars.filter(({ mileage }) => mileage >= mileageFrom && mileage <= mileageTo);
    }
);