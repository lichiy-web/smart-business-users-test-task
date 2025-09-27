import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  error: Error | string | null;
  usersSearchQuery: string;
}

const initialState: AppState = {
  isLoading: false,
  error: null,
  usersSearchQuery: '',
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
  },
});

export const { enableLoader, disableLoader, setError, unsetError } = slice.actions;
export const appReducer = slice.reducer;
