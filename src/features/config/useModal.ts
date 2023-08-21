import { type MouseEventHandler, useCallback, useEffect } from 'react';

const ESC_KEY = 'Escape';

export const useModal = (onClose: () => void) => {
  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (evt) => {
    if ((evt.target as HTMLDivElement).id === 'modal') {
      onClose();
    }
  };

  const handleKeyboardEvent = useCallback(
    (evt: KeyboardEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      if (evt.key === ESC_KEY) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvent);

    return () => window.removeEventListener('keydown', handleKeyboardEvent);
  }, [handleKeyboardEvent]);

  return handleMouseDown;
};
