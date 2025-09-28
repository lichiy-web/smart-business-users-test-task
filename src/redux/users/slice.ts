import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { StateUserEntity, UserEntity } from '../api/types';
import { fetchUser, fetchUsers } from './operations';
import { normalizeUser } from '../../utils/normalizeUser';

export interface UsersState {
  items: StateUserEntity[];
  filteredItems: StateUserEntity[];
  currentUser: StateUserEntity | null;
}

const initialState: UsersState = {
  items: [],
  filteredItems: [],
  currentUser: null,
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: () => {
      return { ...initialState };
    },
    setFilteredUsers: (state, { payload: filteredUsers }: PayloadAction<StateUserEntity[]>) => {
      state.filteredItems = filteredUsers;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload: users }: PayloadAction<UserEntity[]>) => {
        const stateUsers: StateUserEntity[] = users.map(user => normalizeUser(user));
        state.items = stateUsers;
        state.filteredItems = stateUsers;
      })
      .addCase(fetchUser.fulfilled, (state, { payload: user }: PayloadAction<UserEntity>) => {
        state.currentUser = normalizeUser(user);
      });
  },
});

export const usersReducer = slice.reducer;
export const { resetUsers, setFilteredUsers } = slice.actions;
