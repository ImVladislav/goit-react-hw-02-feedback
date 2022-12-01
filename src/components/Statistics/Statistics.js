import PropTypes from 'prop-types';
import { StatisticsTitle, StatisticItem } from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage = 0}) => (
    <>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticItem> Good: {good} </StatisticItem>
        <StatisticItem> Neutral: {neutral} </StatisticItem>
        <StatisticItem> Bad: {bad} </StatisticItem>
        <StatisticItem> total: {total} </StatisticItem>
        <StatisticItem> Positive Feedback: {positivePercentage}% </StatisticItem>
</>  
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}