import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Complexity } from '@/types';

interface ConfigState {
  complexity: Complexity;
}

const initialState: ConfigState = {
  complexity: 'easy',
};

const configSlice = createSlice({
  name: '@@config',
  initialState,
  reducers: {
    setComplexity: (state, action: PayloadAction<Complexity>) => {
      state.complexity = action.payload;
    },
  },
});

export const { setComplexity } = configSlice.actions;
export const configReducer = configSlice.reducer;
