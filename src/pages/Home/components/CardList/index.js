import React, { Component } from 'react';
import PropTypes from 'prop-types';

import debounce from '~/services/debounce';

import connect from './connect';
import View from './view';

class CardListContainer extends Component {
  constructor(props) {
    super(props);

    const { count, followers } = props;

    this.state = {
      hasMore: count > followers.length,
      followers,
    };

    this.loadMore = debounce(this.loadMore.bind(this), 300);
  }

  componentDidMount() {
    this.props.initData();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let result = null;

    if (nextProps.followers !== prevState.followers) {
      result = {
        hasMore: false,
        followers: nextProps.followers,
      };
    }

    return result;
  }

  componentDidUpdate() {
    if (this.state.hasMore === false && this.props.count > this.state.followers.length) {
      this.setState({
        hasMore: true,
      });
    }
  }

  loadMore() {
    const { page } = this.props;

    this.props.changePage({ page: page + 1 });
  }

  render() {
    const { followers, hasMore } = this.state;

    const props = {
      followers,
      hasMore,
      loadMore: this.loadMore,
    };

    return <View {...props} />;
  }
}

CardListContainer.propTypes = {
  followers: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  initData: PropTypes.func.isRequired,
};

export default connect(CardListContainer);
