import { RootState } from '@/store/store';

export const selectComplexity = (state: RootState) => state.config.complexity;
