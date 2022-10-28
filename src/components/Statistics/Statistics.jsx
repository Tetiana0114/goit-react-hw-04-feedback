import PropTypes from 'prop-types';
import { ImSad, ImNeutral, ImSmile } from "react-icons/im";
import css from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.list_item}><ImSmile className={css.icon_good} size={36}/>
      <p className={css.text_statistic}>Good: {good}</p>
      </li>
      <li className={css.list_item}><ImNeutral className={css.icon_neutral} size={36}/>
      <p className={css.text_statistic}>Neutral: {neutral}</p>
      </li>
      <li className={css.list_item}><ImSad className={css.icon_bad} size={36}/>
      <p className={css.text_statistic}>Bad: {bad}</p>
      </li>
      <li className={css.list_item}>
      <p className={css.text}>Total: {total}</p>
      </li>
      <li className={css.list_item}>
      <p className={css.text}>Positive feedback: {positivePercentage} %</p>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;