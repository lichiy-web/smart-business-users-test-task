import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { StateUserEntity, UserEntity } from '../api/types';
import { fetchUsers } from './operations';

export interface UsersState {
  items: StateUserEntity[];
}

const initialState: UsersState = {
  items: [],
};

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUsers: () => {
      return { ...initialState };
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload: users }: PayloadAction<UserEntity[]>) => {
        // console.log({ users });
        const stateUsers: StateUserEntity[] = users.map(user => {
          const compositePhone = user.phone;
          let [phone, phoneExtension] = compositePhone.split(' ');
          phone = phone.replaceAll(/\D/g, '');
          phoneExtension = phoneExtension?.replaceAll(/\D/g, '') || '';
          return { ...user, phone, phoneExtension };
        });
        state.items = stateUsers;
      }
    );
  },
});

export const usersReducer = slice.reducer;
export const { resetUsers } = slice.actions;
