import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import Header from '~/components/Header';
import rest from '~/packages/rest';
import PostCard from '~/modules/Post/components/PostCard';

import RetentionChart from '../RetentionChart';
import useStyles from './styles';

const Retention = () => {
  const classes = useStyles();

  const [chartData, setChartData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(0);

  useEffect(() => {
    rest.Post.fetchLikesByPost(selectedPost).then(({ chartData, posts }) => {
      setChartData(chartData);
      setPosts(posts);
    });
  }, [selectedPost]);

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.chart}>
        <RetentionChart chartData={chartData} />
      </div>
      <div className={classes.posts}>
        {posts.map((post, index) => {
          const cardClasses = classNames(classes.post, {
            [classes.activePost]: selectedPost === index,
          });

          return (
            <button key={post.shortcode} className={cardClasses} onClick={() => setSelectedPost(index)}>
              <PostCard post={post} title={`${index + 1} Post`} className={classes.card} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Retention;
