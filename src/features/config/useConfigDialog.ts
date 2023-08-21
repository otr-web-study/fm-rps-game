import { useState } from 'react';

export const useConfigDealog = () => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const toggleDialogOpened = () => {
    setIsDialogOpened(!isDialogOpened);
  };

  return { isDialogOpened, toggleDialogOpened };
};
