import React from 'react';

export interface IMainProps {
  children: React.ReactNode;
}

const Main: React.FC<IMainProps> = ({ children }) => {
  return <>{children}</>;
};

export default Main;
