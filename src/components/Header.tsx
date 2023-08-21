import { useAppSelector } from '@/store/appHooks';
import { selectComplexity } from '@/features/config/congif-selectors';
import { Score } from '@/features/score/Score';

export const Header = () => {
  const complexity = useAppSelector(selectComplexity);

  return (
    <header className="w-full px-[15px]">
      <div className="mx-auto mt-[30px] flex h-[100px] w-full max-w-[700px] items-center justify-between rounded-header border-[3px] border-outline pl-5 pr-3 lg:mt-[48px] lg:h-[150px] lg:pl-[30px] lg:pr-5">
        <img src={`assets/images/logo-${complexity}.svg`} className="h-[50px] lg:h-[110px]" />
        <Score />
      </div>
    </header>
  );
};
