import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = event => {
    if (event.target.name === 'good') {
      setGood(good + 1);
    } else if (event.target.name === 'neutral') {
      setNeutral(neutral + 1);
    } else if (event.target.name === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    let sum = good + bad + neutral;
    return sum;
  };

  const countPositiveFeedbackPercentage = () => {
    let sum = countTotalFeedback();
    return (Math.round((good / sum) * 100) || 0) + '%';
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback provided" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;
