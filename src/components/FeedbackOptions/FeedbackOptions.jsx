import React from 'react';
import {
  FeedbackButton,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ incrementStatistics }) => {
  return (
    <FeedbackButton>
      <Button onClick={() => incrementStatistics('good')}>Good</Button>
      <Button onClick={() => incrementStatistics('neutral')}>Neutral</Button>
      <Button onClick={() => incrementStatistics('bad')}>Bad</Button>
    </FeedbackButton>
  );
};
