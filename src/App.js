import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import './App.css';
import data20122018 from './20-12-2018';
// import { ss } from './badGuys';
// import { zz } from './goodGuy';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: data20122018,
      from: 0,
      to: 9999999999,
      sort: '',
      fromLikes: 0,
      toLikes: 999
    };

    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleFromLikes = this.handleFromLikes.bind(this);
    this.handleToLikes = this.handleToLikes.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

  handleFrom(event) {
    let value = +event.target.value;
    if (!Number.isInteger(value)) {
      value = 0;
    }

    const followers = this.state.followers.filter(
      (item) => item.edge_follow.count >= value
    );

    this.setState({ from: value, followers });
  }

  handleTo(event) {
    let value = +event.target.value;
    if (!Number.isInteger(value)) {
      value = 9999999999;
    }

    const followers = this.state.followers.filter(
      (item) => item.edge_follow.count <= value
    );

    this.setState({ to: value, followers });
  }

  handleFromLikes(event) {
    let value = +event.target.value;
    if (!Number.isInteger(value)) {
      value = 0;
    }

    const followers = this.state.followers.filter(
      (item) => item.likes >= value
    );

    this.setState({ fromLikes: value, followers });
  }

  handleToLikes(event) {
    let value = +event.target.value;
    if (!Number.isInteger(value)) {
      value = 999;
    }

    const followers = this.state.followers.filter(
      (item) => item.likes <= value
    );

    this.setState({ toLikes: value, followers });
  }

  handleChangeSort(event) {
    let value = event.target.value;
    let followers = this.state.followers;

    if (value === 'likes') {
      followers = followers.sort(function(a, b) {
        return b.likes - a.likes;
      });
    } else if (value === 'comments') {
      followers = followers.sort(function(a, b) {
        return b.comments - a.comments;
      });
    } else if (value === 'up-following') {
      followers = followers.sort(function(a, b) {
        return a.edge_follow.count - b.edge_follow.count;
      });
    } else if (value === 'down-following') {
      followers = followers.sort(function(a, b) {
        return b.edge_follow.count - a.edge_follow.count;
      });
    }

    this.setState({ followers, sort: value });
  }

  render() {
    const { followers, from, to, sort, fromLikes, toLikes } = this.state;
    return (
      <div className="App">
        <div style={{ height: 150 }}>
          <p>
            Показать подписчиком с following от{' '}
            <input type="text" value={from} onChange={this.handleFrom} /> и до{' '}
            <input type="text" value={to} onChange={this.handleTo} />
          </p>
          <p>
            Показать лайки от{' '}
            <input
              type="text"
              value={fromLikes}
              onChange={this.handleFromLikes}
            />{' '}
            и до{' '}
            <input type="text" value={toLikes} onChange={this.handleToLikes} />
          </p>
          Сортировать по следующему критерию:
          <select value={sort} onChange={this.handleChangeSort}>
            <option value="" />
            <option value="likes">По убыванию лайков</option>
            <option value="comments">
              По убыванию количества комментариев
            </option>
            <option value="up-following">По возрастанию following</option>
            <option value="down-following">По убыванию following</option>
          </select>
          <p>
            Общее количество подписчиков: <b>{followers.length}</b>
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
          {followers.map((item, index) => (
            <LazyLoad height={300} key={index}>
              <div
                style={{
                  height: 300,
                  width: '25%',
                  minWidth: 300,
                  border: '1px solid grey',
                  boxSizing: 'border-box',
                  paddingTop: 10
                }}>
                <img
                  src={item.profile_pic_url}
                  style={{ maxWidth: 100, maxHeight: 100 }}
                  alt={item.username}
                />
                <br />
                Ник:{' '}
                <a
                  href={'https://www.instagram.com/' + item.username}
                  target="_blank"
                  rel="noopener noreferrer">
                  {item.username}
                </a>
                <br />
                Имя: {item.full_name || '-'}
                <br />
                Количество постов: {item.mediaCounts}
                <br />
                {item.edge_follow ? (
                  <span
                    style={{
                      color: item.edge_follow.count >= 1000 ? 'red' : 'green'
                    }}>
                    Количество following {item.edge_follow.count}
                  </span>
                ) : (
                  <span>- </span>
                )}
                <br />
                {item.edge_followed_by ? (
                  <span>
                    Количество подписчиков {item.edge_followed_by.count}
                  </span>
                ) : (
                  <span>
                    -
                    {console.log(
                      'item.edge_followed_by == ',
                      item.edge_followed_by
                    )}
                  </span>
                )}
                <br />
                <span
                  style={{
                    color: item.likes < 1 ? 'red' : 'green'
                  }}>
                  Поставили лайков: {item.likes}
                </span>
                <br />
                <span
                  style={{
                    color: item.comments < 1 ? 'red' : 'green'
                  }}>
                  Написали комментариев: {item.comments}
                </span>
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
