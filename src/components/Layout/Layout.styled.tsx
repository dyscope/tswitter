import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  max-width: 1402px;
  width: 100%;
  height: 100vh;
`;
export const StyledMain = styled.main`
  border-left: 1px solid #eff3f4;
  border-right: 1px solid #eff3f4;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 800px) {
    flex: 3 0px;
    order: 2;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
