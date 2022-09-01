import styled from 'styled-components';

export const SocialButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  column-gap: 8px;
  margin-top: 12px;
  color: #536471;
  max-width: 425px;

  svg {
    fill: #536471;
    width: 1.5em;
  }
  & > div {
    display: flex;
    align-items: center;
    min-width: 100px;
    cursor: pointer;
    min-height: 20px;
    transition-property: color;

    span {
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > div {
      padding-top: 3px;
      padding-left: 5px;
    }
  }
`;
