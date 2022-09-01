import { NavLink } from 'react-router-dom';
import { Nav, NavItem, NavIcon, NavText } from './Navigation.styled';
import { navData } from '../../data/navData';

const Navigation = () => {
  return (
    <>
      <Nav>
        {navData.map((item) => {
          return (
            <NavLink
              to={item.navLink}
              key={item.navLabel}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {({ isActive }) =>
                isActive ? (
                  <NavItem>
                    <NavIcon>{item.activeIcon}</NavIcon>
                    <NavText>{item.navLabel}</NavText>
                  </NavItem>
                ) : (
                  <NavItem>
                    <NavIcon>{item.navIcon}</NavIcon>
                    <NavText>{item.navLabel}</NavText>
                  </NavItem>
                )
              }
            </NavLink>
          );
        })}
      </Nav>
    </>
  );
};

export default Navigation;
