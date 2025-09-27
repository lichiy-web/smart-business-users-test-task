import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/app-api';

export interface FetchUsersOptions {
  signal?: AbortSignal;
}

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (options: FetchUsersOptions, thunkAPI) =>
    appApi
      .get('/users', { signal: options.signal })
      .then(({ data }) => data)
      .catch(error =>
        thunkAPI.rejectWithValue({ error, message: 'Rejected during action users/fetchAll' })
      )
);
