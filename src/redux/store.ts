import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { appReducer, type AppState } from './app/slice';
import { usersReducer, type UsersState } from './users/slice';
import { filtersReducer, type FiltersState } from './filters/slice';
import { handleAsyncThunkMiddleware } from './middlewares/appLoadingMiddlware';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favorite'],
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
    app: persistReducer<AppState>(persistConfig, appReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(handleAsyncThunkMiddleware),
});

export const persistor = persistStore(store);

export interface RootState {
  app: AppState;
  users: UsersState;
  filters: FiltersState;
}

export type AppDispatch = typeof store.dispatch;
