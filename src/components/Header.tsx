import { useAppSelector } from '@/store/appHooks';
import { selectComplexity } from '@/features/config-store/congif-selectors';
import { Score } from '@/features/score-store/Score';

export const Header = () => {
  const complexity = useAppSelector(selectComplexity);

  return (
    <header className="w-full px-[15px]">
      <div className="flex justify-between mt-[30px] max-w-[700px] mx-auto items-center pr-3 pl-5 border-[3px] rounded-header border-outline w-full h-[100px] md:mt-[48px] md:h-[150px] md:pl-[30px] md:pr-5">
        <img src={`assets/images/logo-${complexity}.svg`} className="h-[50px] md:h-[110px]" />
        <Score />
      </div>
    </header>
  );
};
