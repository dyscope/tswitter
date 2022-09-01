import styled from 'styled-components';

export const Nav = styled.nav`
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    font-weight: 400;
    color: #0f1419;
    font-size: 20px;

    &.active {
      font-weight: bold;
      svg {
        stroke: #000;
      }
    }
  }
`;

export const NavItem = styled.div`
  display: inline-block;
  transition-duration: 0.2s;
  align-items: center;
  padding: 12px 23px;
  border-radius: 9999px;

  &:hover,
  &:focus {
    background-color: rgba(15, 20, 25, 0.1);
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  float: left;
`;

export const NavText = styled.div`
  margin: 5px 12px 0 24px;
  float: left;
`;
