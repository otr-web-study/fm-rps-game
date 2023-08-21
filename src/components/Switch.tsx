import { FC } from 'react';

interface SwitchProps {
  title?: string;
  value: boolean;
  onChange: () => void;
}

export const Switch: FC<SwitchProps> = ({ title = '', value, onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <label className="relative inline-block h-5 w-9">
        <input
          checked={value}
          onChange={onChange}
          type="checkbox"
          className="peer h-0 w-0 opacity-0"
        ></input>
        <span className="bg-switcher-bg before:bg-slider-bg before:shadow-sh-switcher peer-checked:before:bg-switcher-bg absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-[20px] transition-all duration-300 before:absolute before:bottom-[2px] before:left-[2px] before:h-4 before:w-4 before:rounded-[50%] before:content-[''] peer-checked:bg-[#3DDC84] peer-checked:before:translate-x-4"></span>
      </label>
      <span className={`${value ? 'text-[#3DDC84]' : 'text-slider-bg'} text-sm`}>{title}</span>
    </div>
  );
};
