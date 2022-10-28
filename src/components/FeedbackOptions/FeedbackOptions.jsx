import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnKeys = Object.keys(options);
  return (
      <ul className={css.list}>{btnKeys.map(btnKey => (
      <button className={css.button} type="button" key={btnKey} name={btnKey} onClick={onLeaveFeedback}>{btnKey}</button>
      ))}
      </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  option: PropTypes.objectOf(PropTypes.number),
};
export default FeedbackOptions;