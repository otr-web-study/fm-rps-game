import type { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="flex flex-col items-center mx-[30px]">{children}</div>;
};
