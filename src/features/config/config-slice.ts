import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Complexity } from '@/types';

interface ConfigState {
  complexity: Complexity;
  allowDraw: boolean;
}

const initialState: ConfigState = {
  complexity: 'easy',
  allowDraw: false,
};

const configSlice = createSlice({
  name: '@@config',
  initialState,
  reducers: {
    setComplexity: (state, action: PayloadAction<Complexity>) => {
      state.complexity = action.payload;
    },
    setAllowDraw: (state, action: PayloadAction<boolean>) => {
      state.allowDraw = action.payload;
    },
  },
});

export const { setComplexity, setAllowDraw } = configSlice.actions;
export const configReducer = configSlice.reducer;
