function equalsOrMore(follower) {
  return follower[this.name] >= this.value
}

const filterFollowers = (followers, filter) => {
  const [filterName, filterValue] = filter

  switch (filterName) {
    case 'likesFrom': {
      return followers.filter(equalsOrMore, { name: 'likes', value: parseInt(filterValue) })
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
