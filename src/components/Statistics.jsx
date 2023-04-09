import React from 'react';
import { useFeedback } from './FeedbackContext';

export const Statistics = () => {
  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = useFeedback();
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotalFeedback()}</li>
      <li>Positive feedback: {countPositiveFeedbackPercentage()}</li>
    </ul>
  );
};
