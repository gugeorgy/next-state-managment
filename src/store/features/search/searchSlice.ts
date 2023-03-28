/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

// Actions
export const { setSearch } = searchSlice.actions;

// Selectors
export const searchSelector = (state: RootState) => state.search.search;

// Reducer
export default searchSlice.reducer;
