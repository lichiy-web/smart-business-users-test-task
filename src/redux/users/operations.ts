import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/app-api';
import type { UserEntity } from '../api/types';

export interface FetchUsersOptions {
  signal?: AbortSignal;
}

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (options: FetchUsersOptions, thunkAPI): Promise<UserEntity[]> =>
    appApi
      .get('/users', { signal: options.signal })
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error?.code ?? error.message))
);
