import Tweet from '../Tweet/Tweet';
import { tweetsData } from '../../../data/tweetsData';
import { TimelineBox, StreamBox } from './TimeLine.styled';

const Timeline = () => {
  return (
    <TimelineBox>
      <StreamBox>
        {tweetsData.map((tweet) => {
          return <Tweet key={tweet.nicName} tweetData={tweet} />;
        })}
      </StreamBox>
    </TimelineBox>
  );
};

export default Timeline;
