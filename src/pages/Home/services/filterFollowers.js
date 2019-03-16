function compare(follower) {
  const fieldValue = this.name.split('.').reduce((memo, item) => memo[item], follower)

  if (this.isMore) {
    return fieldValue >= this.value
  } else {
    return fieldValue <= this.value
  }
}

const filterFollowers = (followers, filter) => {
  const [filterName, filterValue] = filter

  switch (filterName) {
    case 'likesFrom': {
      return followers.filter(compare, { name: 'likes', value: parseInt(filterValue), isMore: true })
    }
    case 'likesTo': {
      return followers.filter(compare, { name: 'likes', value: parseInt(filterValue), isMore: false })
    }
    case 'commentsFrom': {
      return followers.filter(compare, { name: 'comments', value: parseInt(filterValue), isMore: true })
    }
    case 'commentsTo': {
      return followers.filter(compare, { name: 'comments', value: parseInt(filterValue), isMore: false })
    }
    case 'followersFrom': {
      return followers.filter(compare, { name: 'edge_followed_by.count', value: parseInt(filterValue), isMore: true })
    }
    case 'followersTo': {
      return followers.filter(compare, { name: 'edge_followed_by.count', value: parseInt(filterValue), isMore: false })
    }
    case 'followingsFrom': {
      return followers.filter(compare, { name: 'edge_follow.count', value: parseInt(filterValue), isMore: true })
    }
    case 'followingsTo': {
      return followers.filter(compare, { name: 'edge_follow.count', value: parseInt(filterValue), isMore: false })
    }
    case 'postsFrom': {
      return followers.filter(compare, { name: 'mediaCounts', value: parseInt(filterValue), isMore: true })
    }
    case 'postsTo': {
      return followers.filter(compare, { name: 'mediaCounts', value: parseInt(filterValue), isMore: false })
    }
    case 'username': {
      for (let follower of followers) {
        if (follower.username === filterValue) {
          return [follower]
        }
      }
    }
  }

  return followers
}

export default (followers, fiters) => {
  if (fiters) {
    return Object.entries(fiters).reduce(filterFollowers, followers)
  } else {
    return followers
  }
}
