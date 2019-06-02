import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const Retention = ({ chartData }) => {
  if (!chartData) {
    return null;
  }

  const followersChart = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Followers Retention Chart',
        data: chartData.values,
        borderColor: '#3f51b5',
        borderWidth: 1,
        lineTension: 0.1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#ED2939',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: '#ED2939',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  };

  return <Line data={followersChart} options={options} />;
};

Retention.propTypes = {
  chartData: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default Retention;
