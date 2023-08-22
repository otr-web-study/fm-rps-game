import { type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from './useModal';
import { useConfig } from './useConfig';
import { ReactComponent as CloseIcon } from '@/assets/images/icon-close.svg';
import { Switch } from '@/components/Switch';

interface ConfigDialogProps {
  onClose: () => void;
}

const variantFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const ConfigDialog: FC<ConfigDialogProps> = ({ onClose }) => {
  const handleMouseDown = useModal(onClose);
  const { allowDraw, complexity, toggleAllowDraw, toggleComplexity } = useConfig();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.3 } }}
      transition={{ duration: 0.2 }}
      id="modal"
      className="fixed bottom-0 left-0 right-0 top-0 z-20 inline-flex items-center justify-center bg-overlay"
      onMouseDown={handleMouseDown}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.5 } }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className="grid h-full w-full grid-cols-1 grid-rows-[225px_300px_140px_min-content] items-center justify-items-center bg-white px-8 lg:max-h-[520px] lg:max-w-[400px] lg:grid-cols-2 lg:grid-rows-[100px_300px_min-content] lg:rounded-radii"
      >
        <motion.h2
          className="text-bg-gr text-center text-[32px] uppercase leading-[32px] lg:justify-self-start"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        >
          rules
        </motion.h2>

        <AnimatePresence mode="wait">
          {complexity === 'easy' && (
            <motion.img
              variants={variantFade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              key="easy"
              exit="hidden"
              src="/assets/images/image-rules-easy.svg"
              alt="rules"
              className="lg:col-span-2 lg:row-start-2"
            />
          )}
          {complexity === 'hard' && (
            <motion.img
              variants={variantFade}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              key="hard"
              exit="hidden"
              src="/assets/images/image-rules-hard.svg"
              alt="rules"
              className="lg:col-span-2 lg:row-start-2"
            />
          )}
        </AnimatePresence>
        <div className="flex flex-col gap-2 lg:col-span-2 lg:mt-10 lg:grid-rows-3">
          <Switch title="Allow Draw" value={allowDraw} onChange={toggleAllowDraw} />
          <Switch title="Hard mode" value={complexity === 'hard'} onChange={toggleComplexity} />
        </div>
        <motion.button
          whileHover={{ scale: [null, 1.5, 1.4], originX: 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 250 }}
          onClick={onClose}
          className="lg:col-start-2 lg:row-start-1 lg:justify-self-end"
        >
          <CloseIcon />
          <span className="sr-only">close</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
