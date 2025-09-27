import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { StateUserEntity, UserEntity } from '../api/types';
import { fetchUsers } from './operations';

export interface UsersState {
  items: StateUserEntity[];
  filteredItems: StateUserEntity[];
}

const initialState: UsersState = {
  items: [],
  filteredItems: [],
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
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload: users }: PayloadAction<UserEntity[]>) => {
        const stateUsers: StateUserEntity[] = users.map(user => {
          const compositePhone = user.phone;
          let [phone, phoneExtension] = compositePhone.split(' ');
          phone = phone.replaceAll(/\D/g, '');
          phoneExtension = phoneExtension?.replaceAll(/\D/g, '') || '';
          user.email = user.email.toLowerCase();
          return { ...user, phone, phoneExtension };
        });
        state.items = stateUsers;
        state.filteredItems = stateUsers;
      }
    );
  },
});

export const usersReducer = slice.reducer;
export const { resetUsers, setFilteredUsers } = slice.actions;
