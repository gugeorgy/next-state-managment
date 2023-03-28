import { configureStore } from '@reduxjs/toolkit';

import menuReducer from './features/menu/menuSlice';
import searchReducer from './features/search/searchSlice';
import pokemonApi from './services/pokemon';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    menu: menuReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
