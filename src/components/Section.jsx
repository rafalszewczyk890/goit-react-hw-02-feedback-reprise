import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    const { children, title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    );
  }
}
