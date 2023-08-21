import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectAllowDraw, selectComplexity } from './congif-selectors';
import { setComplexity, setAllowDraw } from './config-slice';

export const useConfig = () => {
  const dispatch = useAppDispatch();
  const allowDraw = useAppSelector(selectAllowDraw);
  const complexity = useAppSelector(selectComplexity);

  const toggleAllowDraw = () => dispatch(setAllowDraw(!allowDraw));
  const toggleComplexity = () => dispatch(setComplexity(complexity === 'easy' ? 'hard' : 'easy'));

  return { allowDraw, complexity, toggleAllowDraw, toggleComplexity };
};
