import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'

import { withStyles } from '@material-ui/core/styles'

import { ContextLoader } from '~/packages/UI'

import styles from './styles'
import Card from './Card'

const CardList = ({ classes, data, count, loadMore, hasMore }) => {
  return (
    <div className={classes.container}>
      <span>{count}</span>
      <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={hasMore} loader={<ContextLoader />}>
        <div className={classes.contentContainer}>
          {data.map((item) => {
            return <Card key={item.username} item={item} />
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}

CardList.propTypes = {
  loadMore: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
}

export default withStyles(styles)(CardList)
