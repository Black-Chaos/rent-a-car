import { createSelector } from "@reduxjs/toolkit";

export const selectItems = store => store.cars.items;
export const selectedCar = store => store.cars.selectedCar;
export const selectIsLoading = store => store.cars.isLoading;
export const selectError = store => store.cars.error;

export const selectFavoriteCarsId = state => state.cars.favoriteCarsId;
export const selectFavoriteCarsItem = state => state.cars.favoriteItems;

export const selectFilter = store => store.filter;
export const selectParams = createSelector(selectFilter,({make, rentalPrice})=> ({
  make,
  rentalPrice,
})) 

export const selectFilteredCars = createSelector(
    [selectItems, selectFilter],
    (cars, { mileageTo, mileageFrom }) => {
        if (mileageTo === 0) {
            return cars;
        }
        return cars.filter(({ mileage }) => mileage >= mileageFrom && mileage <= mileageTo);
    }
);