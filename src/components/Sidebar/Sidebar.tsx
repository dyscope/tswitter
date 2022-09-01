import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import { SidebarBox, SidebarInner } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarBox>
      <SidebarInner>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </SidebarInner>
    </SidebarBox>
  );
};
export default Sidebar;
