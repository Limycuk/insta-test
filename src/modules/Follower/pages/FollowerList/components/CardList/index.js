import React, { Component } from 'react';
import PropTypes from 'prop-types';

import debounce from '~/services/debounce';

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
    const { page, setPage } = this.props;

    setPage(page + 1);
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
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default CardListContainer;
