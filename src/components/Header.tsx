import { motion } from 'framer-motion';
import { useAppSelector } from '@/store/appHooks';
import { selectComplexity } from '@/features/config/congif-selectors';
import { MScore } from '@/features/score/Score';

export const Header = () => {
  const complexity = useAppSelector(selectComplexity);

  return (
    <header className="w-full px-[15px]">
      <div className="mx-auto mt-[30px] flex h-[100px] w-full max-w-[700px] items-center justify-between rounded-header border-[3px] border-outline pl-5 pr-3 lg:mt-[48px] lg:h-[150px] lg:pl-[30px] lg:pr-5">
        <motion.img
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.4}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, type: 'spring', stiffness: 300 }}
          src={`assets/images/logo-${complexity}.svg`}
          className="h-[50px] lg:h-[110px]"
        />
        <MScore
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={0.4}
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.8, type: 'spring', stiffness: 300 }}
        />
      </div>
    </header>
  );
};
