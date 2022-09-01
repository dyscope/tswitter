import styled from 'styled-components';

export const LogoWrap = styled.div`
  width: 54px;
  height: 58px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s all ease-in;
  margin-left: 10px;

  &:hover {
    background-color: rgba(29, 155, 240, 0.1);
  }
`;

export const Logotype = styled.div`
  width: 30px;
  height: 30px;

  svg {
    height: 2.1rem;
    transform: scaleX(-1);
  }
`;
