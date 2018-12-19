import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import './App.css';
import { tt } from './formattedResultsWithLikes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followers: tt,
      from: 0,
      to: 9999999999,
      sort: ''
    };

    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }

  handleFrom(event) {
    let value = +event.target.value;
    if (!Number.isInteger(value)) {
      value = 0;
    }

    const followers = this.state.followers.filter(
      (item) => item.followingCount >= value
    );

    this.setState({ from: value, followers });
  }

  handleTo(event) {
    let value = +event.target.value;
    if (!Number.isInteger(value)) {
      value = 9999999999;
    }

    const followers = this.state.followers.filter(
      (item) => item.followingCount <= value
    );

    this.setState({ to: value, followers });
  }

  handleChangeSort(event) {
    let value = event.target.value;
    let followers = this.state.followers;
    console.log(value);
    if (value === 'likes') {
      followers = followers.sort(function(a, b) {
        return b.likes - a.likes;
      });
    } else if (value === 'up-following') {
      followers = followers.sort(function(a, b) {
        return a.followingCount - b.followingCount;
      });
    } else if (value === 'down-following') {
      followers = followers.sort(function(a, b) {
        return b.followingCount - a.followingCount;
      });
    }

    this.setState({ followers, sort: value });
  }

  render() {
    const { followers, from, to, sort } = this.state;

    return (
      <div className="App">
        <div style={{ height: 120 }}>
          <p>
            Показать подписчиком с following от{' '}
            <input type="text" value={from} onChange={this.handleFrom} /> и до{' '}
            <input type="text" value={to} onChange={this.handleTo} />
          </p>
          Сортировать по следующему критерию:
          <select value={sort} onChange={this.handleChangeSort}>
            <option value="" />
            <option value="likes">По убыванию лайков</option>
            <option value="up-following">По возрастанию following</option>
            <option value="down-following">По убыванию following</option>
          </select>
          <p>
            Общее количество подписчиков: <b>{followers.length}</b>
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {followers.map((item, index) => (
            <LazyLoad height={150} key={index}>
              <div
                style={{
                  height: 150,
                  width: '25%',
                  border: '1px solid grey',
                  boxSizing: 'border-box'
                }}>
                Ник:{' '}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.nick}
                </a>
                <br />
                Имя: {item.name}
                <br />
                {item.postsText}
                <br />
                <span
                  style={{
                    color: item.followingCount >= 1000 ? 'red' : 'green'
                  }}>
                  {item.followingText}
                </span>
                <br />
                {item.followersText}
                <br />
                <span
                  style={{
                    color: item.likes < 1 ? 'red' : 'green'
                  }}>
                  Поставили лайков: {item.likes}
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
