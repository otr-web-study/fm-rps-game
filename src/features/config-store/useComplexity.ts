import { useAppSelector, useAppDispatch } from '@/store/appHooks';
import { selectComplexity } from './congif-selectores';
import { setComplexity } from './config-slice';

export const useComplexity = () => {
  const dispatch = useAppDispatch();
  const complexity = useAppSelector(selectComplexity);

  const toggleComplexity = () => {
    dispatch(setComplexity(complexity === 'easy' ? 'hard' : 'easy'));
  };

  return toggleComplexity;
};
