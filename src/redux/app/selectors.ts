import type { RootState } from '../store';

export const selectIsLoading = (state: RootState) => state.app.isLoading;
export const selectError = (state: RootState) => state.app.error;
export const selectUsersSearchQuery = (state: RootState) => state.app.usersSearchQuery;
