import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: '@@score',
  initialState: 0,
  reducers: {
    setScore: (_, action: PayloadAction<number>) => action.payload,
  },
});

export const { setScore } = scoreSlice.actions;
export const scoreReducer = scoreSlice.reducer;
