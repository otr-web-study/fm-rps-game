import { type FC } from 'react';
import { useModal } from './useModal';
import { useConfig } from './useConfig';
import { ReactComponent as CloseIcon } from '@/assets/images/icon-close.svg';
import { Switch } from '@/components/Switch';

interface ConfigDialogProps {
  onClose: () => void;
}

export const ConfigDialog: FC<ConfigDialogProps> = ({ onClose }) => {
  const handleMouseDown = useModal(onClose);
  const { allowDraw, complexity, toggleAllowDraw, toggleComplexity } = useConfig();

  return (
    <div
      id="modal"
      className="fixed bottom-0 left-0 right-0 top-0 z-20 inline-flex items-center justify-center bg-overlay"
      onMouseDown={handleMouseDown}
    >
      <div className="grid h-full w-full grid-cols-1 grid-rows-[225px_300px_140px_min-content] items-center justify-items-center bg-white px-8 lg:max-h-[520px] lg:max-w-[400px] lg:grid-cols-2 lg:grid-rows-[100px_300px_min-content] lg:rounded-radii">
        <h2 className="text-bg-gr text-center text-[32px] uppercase leading-[32px] lg:justify-self-start">
          rules
        </h2>
        {complexity === 'easy' && (
          <img
            src="/assets/images/image-rules-easy.svg"
            alt="rules"
            className="lg:col-span-2 lg:row-start-2"
          />
        )}
        {complexity === 'hard' && (
          <img
            src="/assets/images/image-rules-hard.svg"
            alt="rules"
            className="lg:col-span-2 lg:row-start-2"
          />
        )}
        <div className="flex flex-col gap-2 lg:col-span-2 lg:mt-10 lg:grid-rows-3">
          <Switch title="Allow Draw" value={allowDraw} onChange={toggleAllowDraw} />
          <Switch title="Hard mode" value={complexity === 'hard'} onChange={toggleComplexity} />
        </div>
        <button onClick={onClose} className="lg:col-start-2 lg:row-start-1 lg:justify-self-end">
          <CloseIcon />
          <span className="sr-only">close</span>
        </button>
      </div>
    </div>
  );
};
