import React from 'react';
import {
  FeedbackButton,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ IncrementStatistics }) => {
  return (
    <FeedbackButton>
      <Button onClick={() => IncrementStatistics('good')}>Good</Button>
      <Button onClick={() => IncrementStatistics('neutral')}>Neutral</Button>
      <Button onClick={() => IncrementStatistics('bad')}>Bad</Button>
    </FeedbackButton>
  );
};
