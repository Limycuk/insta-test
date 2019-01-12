import React, { Component } from 'react';
import PropTypes from 'prop-types';

import connect from './connect';
import View from './view';

class CardListContainer extends Component {
  constructor(props) {
    super(props);

    const { count, data } = props;

    this.state = {
      hasMore: count > data.length,
      data
    };

    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    this.props.initData();
  }

  static getDerivedStateFromProps(nextProps, state) {
    let result = null;

    if (nextProps.data.length > state.data.length) {
      result = {
        hasMore: false,
        data: nextProps.data
      };
    }

    return result;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.hasMore === false &&
      this.props.count > this.state.data.length
    ) {
      this.setState({
        hasMore: true
      });
    }
  }

  loadMore(page) {
    this.props.changePage(page);
  }

  render() {
    const { count } = this.props;
    const { data, hasMore } = this.state;

    const props = {
      data,
      hasMore,
      count,
      loadMore: this.loadMore
    };

    return <View {...props} />;
  }
}

CardListContainer.propTypes = {
  data: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired
};

export default connect(CardListContainer);
