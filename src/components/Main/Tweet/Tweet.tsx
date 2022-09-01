import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar/Avatar';
import SocialButtons from './SocialButtons/SocialButtons';
import {
  TweetBox,
  TweetBody,
  TweetProfile,
  TweetContent,
  TweetDate,
} from './Tweet.styled';

export interface ITweetProps {
  tweetData: {
    avatar: string;
    name: string;
    nicName: string;
    date: string;
    text: string;
    replies: number;
    retweets: number;
    likes: number;
    statusId: any;
  };
}

const Tweet: React.FC<ITweetProps> = ({
  tweetData: {
    avatar,
    name,
    nicName,
    date,
    text,
    replies,
    retweets,
    likes,
    statusId,
  },
}) => {
  return (
    <TweetBox>
      <Avatar avatar={avatar} name={name} nicName={nicName} />
      <TweetBody>
        <TweetProfile>
          <Link to={`/${nicName}`}>
            <span>{name}</span> @{nicName}
          </Link>
          <span>&bull;</span>
          <TweetDate>
            <Link to={`/${nicName}/status/${statusId}`}>{date}</Link>
          </TweetDate>
        </TweetProfile>
        <TweetContent>{text}</TweetContent>
        <SocialButtons replies={replies} retweets={retweets} likes={likes} />
      </TweetBody>
    </TweetBox>
  );
};

export default Tweet;
