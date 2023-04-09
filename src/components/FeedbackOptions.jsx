import React from 'react';
import { useFeedback } from './FeedbackContext';

export const FeedbackOptions = () => {
  const { handleFeedback } = useFeedback();

  const options = ['good', 'neutral', 'bad'];
  return (
    <div>
      {options.map(option => {
        return (
          <button name={option} onClick={handleFeedback}>
            {option}
          </button>
        );
      })}
    </div>
  );
};
