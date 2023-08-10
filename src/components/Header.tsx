import { useAppSelector } from '@/store/appHooks';
import { selectComplexity } from '@/features/config-store/congif-selectores';

export const Header = () => {
  const complexity = useAppSelector(selectComplexity);

  return (
    <div className="flex justify-between">
      <img src={`assets/images/logo-${complexity}.svg`} />
    </div>
  );
};
