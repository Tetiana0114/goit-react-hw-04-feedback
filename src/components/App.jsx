import React, { Component } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';

export class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

countTotalFeedback() {
  return this.state.good + this.state.neutral + this.state.bad;
};
countPositiveFeedbackPercentage() {
  const sum = this.countTotalFeedback();
  return Math.round((this.state.good * 100) / sum);
};

onSelectedBtn = e => { this.setState(prevState => ({
  [e.target.name]: prevState[e.target.name] + 1,
  }));
};

render() {
  const sum = this.countTotalFeedback();
  const perCent = this.countPositiveFeedbackPercentage();
return (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 24,
      color: '#010101'
    }}
    >
  <Section title="Please, leave feedback:">
    <FeedbackOptions
      options={this.state}
      onLeaveFeedback={this.onSelectedBtn}
    ></FeedbackOptions>
  </Section>

  {sum === 0 ? ( <Notification message="There is no feedback!"/>) : 
  (<Section title="Statistics:">
    <Statistics
      good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={sum}
      positivePercentage={perCent}
    ></Statistics>
  </Section>
      )}
    </div>
  );
};
};