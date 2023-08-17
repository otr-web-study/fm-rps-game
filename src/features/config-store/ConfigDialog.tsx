import { type FC } from 'react';
import { useModal } from './useModal';
import { ReactComponent as CloseIcon } from '@/assets/images/icon-close.svg';

interface ConfigDialogProps {
  onClose: () => void;
}

export const ConfigDialog: FC<ConfigDialogProps> = ({ onClose }) => {
  const handleMouseDown = useModal(onClose);

  return (
    <div
      id="modal"
      className="bg-overlay fixed bottom-0 left-0 right-0 top-0 z-20 inline-flex items-center justify-center"
      onMouseDown={handleMouseDown}
    >
      <div className="grid h-full w-full grid-cols-1 grid-rows-[225px_300px_140px_min-content] items-center justify-items-center bg-white lg:grid-cols-2 lg:rounded-radii">
        <h2 className="text-bg-gr text-center text-[32px] uppercase leading-[32px]">rules</h2>
        <img src="/assets/images/image-rules-easy.svg" alt="rules" />
        <div></div>
        <button onClick={onClose}>
          <CloseIcon />
          <span className="sr-only">close</span>
        </button>
      </div>
    </div>
  );
};
