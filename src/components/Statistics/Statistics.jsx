import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsThumb,
  StatisticsItem,
  StatisticsList,
} from './Statistics.styled';
export const Statistics = ({ good, neutral, bad, total, goodPercent }) => {
  return (
    <StatisticsThumb>
      <StatisticsItem>
        <StatisticsList>Good:{good}</StatisticsList>
        <StatisticsList>Neutal:{neutral}</StatisticsList>
        <StatisticsList>Bad:{bad}</StatisticsList>
        <StatisticsList>Total:{total}</StatisticsList>
        <StatisticsList>Positive feedback:{goodPercent}%</StatisticsList>
      </StatisticsItem>
    </StatisticsThumb>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
