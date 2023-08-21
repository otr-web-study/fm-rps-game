import { useAppDispatch, useAppSelector } from '@/store/appHooks';
import { selectScore } from './score-selectors';
import { setScore } from './score-slice';

export const useScore = () => {
  const dispatch = useAppDispatch();
  const score = useAppSelector(selectScore);

  const updateScore = (val: number) => {
    dispatch(setScore(score + val));
  };

  return updateScore;
};
