import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';


export const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);

 const state = {good, neutral, bad};

// const countTotalFeedback= () => {
//   return good + neutral + bad;
// };

const sum = good + neutral + bad;

const countPositiveFeedbackPercentage = () => {
  // const sum = countTotalFeedback();
  return Math.round((good * 100) / sum);
};

const onSelectedBtn = (event) => {
  switch(event.target.name) {
    case 'good':
    setGood(good + 1);
    break;

    case 'neutral':
    setNeutral(neutral + 1);
    break;

    case 'bad':
    setBad(bad + 1);
    break;

    default:
    console.warn(`Not found.`);
  }
}

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
    options={state}
    onLeaveFeedback={onSelectedBtn}
  ></FeedbackOptions>
</Section>

{sum === 0 ? ( <Notification message="There is no feedback!"/>) : 
(<Section title="Statistics:">
  <Statistics
    good={good}
    neutral={neutral}
    bad={bad}
    total={sum}
    positivePercentage={countPositiveFeedbackPercentage()}
  ></Statistics>
</Section>
    )}
  </div>
);
}