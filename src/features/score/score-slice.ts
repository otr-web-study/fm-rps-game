import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: '@@score',
  initialState: 0,
  reducers: {
    setScore: (_, action: PayloadAction<number>) => action.payload,
    updateScore: (state, action: PayloadAction<number>) => state + action.payload,
  },
});

export const { updateScore } = scoreSlice.actions;
export const scoreReducer = scoreSlice.reducer;
