import { isFulfilled, isPending, isRejected } from '@reduxjs/toolkit';
import type { Middleware } from 'redux';
import { disableLoader, enableLoader, setError, type AppState } from '../app/slice';

export const handleAsyncThunkMiddleware: Middleware = store => next => action => {
  if (isPending(action)) {
    store.dispatch(enableLoader());
  }

  if (isFulfilled(action) || isRejected(action)) {
    store.dispatch(disableLoader());
  }

  if (isRejected(action)) {
    store.dispatch(setError(action.payload as AppState['error']));
  }

  return next(action);
};
