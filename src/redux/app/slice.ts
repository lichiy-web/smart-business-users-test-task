import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  error: Error | string | null;
  usersSearchQuery: string;
  isDarkTheme: boolean;
}

const initialState: AppState = {
  isLoading: false,
  error: null,
  usersSearchQuery: '',
  isDarkTheme: false,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enableLoader: state => {
      state.isLoading = true;
    },
    disableLoader: state => {
      state.isLoading = false;
    },
    setError: (state, { payload: error }: PayloadAction<AppState['error']>) => {
      state.error = error;
    },
    unsetError: state => {
      state.error = null;
    },
    setSearchQuery: (
      state,
      { payload: newSearchQuery }: PayloadAction<AppState['usersSearchQuery']>
    ) => {
      state.usersSearchQuery = newSearchQuery;
    },
  },
});

export const { enableLoader, disableLoader, setError, unsetError, setSearchQuery } = slice.actions;
export const appReducer = slice.reducer;
