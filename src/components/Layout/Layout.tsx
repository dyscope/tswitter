import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SidebarSecond from '../SidebarSecond/SidebarSecond';

import { Wrapper, StyledMain, MainWrapper } from './Layout.styled';

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <StyledMain>
        <MainWrapper>{children}</MainWrapper>
      </StyledMain>
      <Sidebar />
      <SidebarSecond />
    </Wrapper>
  );
};

export default Layout;
