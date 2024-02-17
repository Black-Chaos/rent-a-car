import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    make: '',
    rentalPrice: '',
    mileageFrom: 0,
    mileageTo: 0,
};

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(_, { payload }) {
            return payload;
        },
    },
});

export const { setFilter } = filter.actions;
export const filterReducer = filter.reducer;
