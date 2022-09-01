import styled from 'styled-components';

export const TweetBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-bottom: 1px solid #eff3f4;
`;

export const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TweetProfile = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  color: #536471;

  a {
    text-decoration: none;
    color: #000;

    span {
      font-weight: bold;
      font-size: 16px;
      color: #000;
    }
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
  }
`;

export const TweetDate = styled.div`
  color: #536471;
`;

export const TweetContent = styled.div`
  margin-top: 12px;
  color: #0f1419;
  font-size: 16px;
  line-height: 1.3;
`;
