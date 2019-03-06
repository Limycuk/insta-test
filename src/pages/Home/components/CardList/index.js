import React, { Component } from 'react'
import PropTypes from 'prop-types'

import connect from './connect'
import View from './view'

class CardListContainer extends Component {
  constructor(props) {
    super(props)

    const { count, followers } = props

    this.state = {
      hasMore: count > followers.length,
      followers,
    }

    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    this.props.initData()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let result = null

    if (nextProps.followers !== prevState.followers) {
      result = {
        hasMore: false,
        followers: nextProps.followers,
      }
    }

    return result
  }

  componentDidUpdate() {
    if (this.state.hasMore === false && this.props.count > this.state.followers.length) {
      this.setState({
        hasMore: true,
      })
    }
  }

  loadMore(page) {
    this.props.changePage({ page })
  }

  render() {
    const { followers, hasMore } = this.state

    const props = {
      followers,
      hasMore,
      loadMore: this.loadMore,
    }

    return <View {...props} />
  }
}

CardListContainer.propTypes = {
  followers: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
}

export default connect(CardListContainer)
