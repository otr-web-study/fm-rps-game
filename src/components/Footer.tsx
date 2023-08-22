import { AnimatePresence, motion } from 'framer-motion';
import { useConfigDealog } from '@/features/config/useConfigDialog';
import { ConfigDialog } from '@/features/config/ConfigDialog';

export const Footer = () => {
  const { isDialogOpened, toggleDialogOpened } = useConfigDealog();

  return (
    <footer className="relative z-10 mt-11 flex w-full max-w-[1348px] justify-center px-5 lg:mt-[18px] lg:justify-end">
      <motion.button
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.4}
        initial={{ x: '60vw' }}
        animate={{ x: 0, transition: { delay: 1.1 } }}
        transition={{
          type: 'spring',
          stiffness: 300,
        }}
        whileHover={{
          scale: [null, 1.2, 1.15],
          transition: { duration: 0.3, delay: 0, type: 'spring', stiffness: 250 },
        }}
        className="rounded-radii border-2 border-white/50 px-[38px] py-[7px] uppercase tracking-[2px]"
        onClick={toggleDialogOpened}
      >
        rules
      </motion.button>
      <AnimatePresence>
        {isDialogOpened && <ConfigDialog onClose={toggleDialogOpened} />}
      </AnimatePresence>
    </footer>
  );
};
