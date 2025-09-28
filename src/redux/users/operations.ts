import { createAsyncThunk } from '@reduxjs/toolkit';
import { appApi } from '../api/app-api';
import type { UserEntity } from '../api/types';

export interface FetchUsersOptions {
  signal?: AbortSignal;
}

export interface FetchUserOptions {
  signal?: AbortSignal;
  userId: number;
}
export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async ({ signal }: FetchUsersOptions, thunkAPI): Promise<UserEntity[]> =>
    appApi
      .get('/users', { signal })
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error?.code ?? error.message))
);

export const fetchUser = createAsyncThunk(
  'user/fetchAll',
  async ({ signal, userId }: FetchUserOptions, thunkAPI): Promise<UserEntity> =>
    appApi
      .get(`/users/${userId}`, { signal })
      .then(({ data }) => data)
      .catch(error => thunkAPI.rejectWithValue(error?.code ?? error.message))
);
