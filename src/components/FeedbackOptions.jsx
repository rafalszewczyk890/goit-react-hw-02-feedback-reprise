import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map(option => {
          return (
            <button name={option} onClick={onLeaveFeedback}>
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
