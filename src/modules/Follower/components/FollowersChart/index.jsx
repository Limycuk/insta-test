import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

import { withStyles } from '@material-ui/core/styles';

import rest from '~/packages/rest';

import styles from './styles';
import getYAxeLimits from './services/getYAxeLimits';

const FollowersChart = ({ classes }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    rest.Follower.fetchAvailableFollowerCounters().then((data) => {
      setData(data);
    });
  });

  if (!data) {
    return null;
  }

  const followersChart = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Followers Chart',
        data: Object.values(data),
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
            ...getYAxeLimits(Object.values(data)),
          },
        },
      ],
    },
  };

  return <Line data={followersChart} options={options} />;
};

FollowersChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowersChart);
