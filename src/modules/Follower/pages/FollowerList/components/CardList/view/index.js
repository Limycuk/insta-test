import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import { withStyles } from '@material-ui/core/styles';

import { ContextLoader } from '~/packages/UI';
import FollowerCard from '~/modules/Follower/components/FollowerCard';
import styles from './styles';

const CardList = ({ classes, followers, loadMore, hasMore }) => {
  return (
    <div className={classes.container}>
      <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasMore} loader={<ContextLoader key="0" />}>
        <div className={classes.contentContainer}>
          {followers.map((item) => {
            return <FollowerCard key={item.username} item={item} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

CardList.propTypes = {
  loadMore: PropTypes.func.isRequired,
  followers: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default withStyles(styles)(CardList);
