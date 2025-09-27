import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  name: string;
  userName: string;
  email: string;
  phone: string;
  phoneExtension: string;
}

const initialState: FiltersState = {
  name: '',
  userName: '',
  email: '',
  phone: '',
  phoneExtension: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, { payload: filters }: PayloadAction<Partial<FiltersState>>) => {
      state = { ...state, ...filters };
    },
  },
});

export const { setFilters } = slice.actions;
export const filtersReducer = slice.reducer;
