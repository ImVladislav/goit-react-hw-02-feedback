import PropTypes from 'prop-types';
import { StatisticsTitle, StatisticItem } from './Statistics.styled'

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => (
    <>
        <StatisticsTitle>Statistics</StatisticsTitle>
        <StatisticItem> Good: {good} </StatisticItem>
        <StatisticItem> Neutral: {neutral} </StatisticItem>
        <StatisticItem> Bad: {bad} </StatisticItem>
        <StatisticItem> total: {total} </StatisticItem>
        <StatisticItem> Positive Feedback: {total > 0 ? positivePercentage : 0}% </StatisticItem>
</>  
)

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}