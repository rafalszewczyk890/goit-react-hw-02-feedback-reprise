import React, { Component } from 'react';

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
      <div>
        <h1>Please leave your feedback</h1>
        <button name="good" onClick={this.handleFeedback}>
          Good
        </button>
        <button name="neutral" onClick={this.handleFeedback}>
          Neutral
        </button>
        <button name="bad" onClick={this.handleFeedback}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </div>
    );
  }
}

export default App;
