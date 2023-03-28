/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

interface MenuState {
  isOpen: boolean;
  selectedId: string;
}

const initialState: MenuState = {
  isOpen: false,
  selectedId: '',
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    menuOpen: (state, action: PayloadAction<string>) => {
      state.isOpen = true;
      state.selectedId = action.payload;
    },
    menuClose: state => {
      state.isOpen = false;
      state.selectedId = '';
    },
  },
});

// Actions
export const { menuClose, menuOpen } = menuSlice.actions;

// Selectors
export const menuSelector = (state: RootState) => state.menu;

// Reducer
export default menuSlice.reducer;
