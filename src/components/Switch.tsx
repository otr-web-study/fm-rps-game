import { FC } from 'react';
import { motion } from 'framer-motion';

interface SwitchProps {
  title?: string;
  value: boolean;
  onChange: () => void;
}

export const Switch: FC<SwitchProps> = ({ title = '', value, onChange }) => {
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className="flex items-center gap-3">
      <label className="relative inline-block h-5 w-9">
        <input
          checked={value}
          onChange={onChange}
          type="checkbox"
          className="peer h-0 w-0 opacity-0"
        ></input>
        <motion.div
          layout
          whileHover={{ scale: 1.1, transition: { type: 'spring', stiffness: 300 } }}
          className="group absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-start rounded-[20px] px-[3px] data-[is-on='true']:justify-end "
          style={{ backgroundColor: value ? '#3DDC84' : '#e2e5ee' }}
          data-is-on={value}
        >
          <motion.div
            className="h-4 w-4 rounded-[50%] bg-slider-bg shadow-sh-switcher group-[[data-is-on='true']]:bg-switcher-bg"
            layout
            transition={spring}
          ></motion.div>
        </motion.div>
      </label>
      <span className="text-sm text-slider-bg">{title}</span>
    </div>
  );
};
