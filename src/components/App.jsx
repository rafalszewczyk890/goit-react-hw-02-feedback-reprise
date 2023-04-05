import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    if (event.target.name === 'good') {
      this.setState(prevState => {
        return { good: prevState.good + 1 };
      });
    } else if (event.target.name === 'neutral') {
      this.setState(prevState => {
        return { neutral: prevState.neutral + 1 };
      });
    } else if (event.target.name === 'bad') {
      this.setState(prevState => {
        return { bad: prevState.bad + 1 };
      });
    }
  };

  countTotalFeedback = () => {
    let sum = 0;
    for (let value of Object.values(this.state)) {
      sum += value;
    }
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    let sum = this.countTotalFeedback();
    return (Math.round((this.state.good / sum) * 100) || 0) + '%';
  };

  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;
