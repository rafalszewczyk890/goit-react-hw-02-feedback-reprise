import { createContext, useContext } from 'react';

export const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);
