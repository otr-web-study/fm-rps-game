import { RootState } from '@/store/store';

export const selectComplexity = (state: RootState) => state.config.complexity;
export const selectAllowDraw = (state: RootState) => state.config.allowDraw;
