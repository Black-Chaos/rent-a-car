import { createAsyncThunk } from '@reduxjs/toolkit';
import { CarsAPI } from 'API/carsAPI';

const carsAPI = new CarsAPI('cars');

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { rejectWithValue }) => {
    try {
      const data = await carsAPI.get();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCarsByParams = createAsyncThunk(
  'cars/getCarsByParams',
  async (params, { rejectWithValue }) => {
    if (params) {
      carsAPI.setParams(params);
    }
    try {
      const data = await carsAPI.get();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCarsById = createAsyncThunk(
  'cars/getCarsById',
  async (id, { rejectWithValue }) => {
    try {
      const car = await carsAPI.getById(id);
      return car;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFavoriteCars = createAsyncThunk(
  'cars/getFavoriteCars',
  async (ids, { rejectWithValue }) => {
    try {
      const cars = await Promise.allSettled(ids.map(id => carsAPI.getById(id)));
      return cars;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
