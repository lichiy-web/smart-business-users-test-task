import type { RootState } from '../store';

export const selectUsers = (state: RootState) => state.users.items;
export const selectFilteredUsers = (state: RootState) => state.users.filteredItems;
export const selectCurrentUser = (state: RootState) => state.users.currentUser;
