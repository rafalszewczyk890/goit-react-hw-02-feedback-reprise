import { createContext, useContext, useState } from 'react';

export const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
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
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        handleFeedback,
        countTotalFeedback,
        countPositiveFeedbackPercentage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
