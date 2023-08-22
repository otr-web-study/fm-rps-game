import type { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-[15px] flex flex-col items-center">{children}</div>;
};
