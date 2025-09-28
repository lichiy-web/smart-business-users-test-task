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
    const error = action.payload;
    if (error === 'ERR_CANCELED') return next(action);
    store.dispatch(setError(error as AppState['error']));
  }

  return next(action);
};
