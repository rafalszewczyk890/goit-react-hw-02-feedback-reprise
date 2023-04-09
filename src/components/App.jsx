import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { useFeedback } from './FeedbackContext';

const App = () => {
  const { countTotalFeedback } = useFeedback();

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback provided" />
        ) : (
          <Statistics />
        )}
      </Section>
    </>
  );
};

export default App;
