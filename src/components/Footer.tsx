import { useConfigDealog } from '@/features/config-store/useConfigDialog';
import { ConfigDialog } from '@/features/config-store/ConfigDialog';

export const Footer = () => {
  const { isDialogOpened, toggleDialogOpened } = useConfigDealog();

  return (
    <footer className="mt-11 flex w-full max-w-[1348px] justify-center px-5 lg:mt-[18px] lg:justify-end">
      <button
        className="rounded-radii border-2 border-white/50 px-[38px] py-[7px] uppercase tracking-[2px]"
        onClick={toggleDialogOpened}
      >
        rules
      </button>
      {isDialogOpened && <ConfigDialog onClose={toggleDialogOpened} />}
    </footer>
  );
};
