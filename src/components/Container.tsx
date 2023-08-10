import type { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}
export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center mx-3 md:flex-col md:justify-normal md:items-center">
      {children}
    </div>
  );
};
