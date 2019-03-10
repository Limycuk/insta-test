function compare(a, b) {
  const aValue = this.name.split('.').reduce((memo, item) => memo[item], a)
  const bValue = this.name.split('.').reduce((memo, item) => memo[item], b)

  if (aValue === bValue) {
    return 0
  } else if (aValue < bValue) {
    return this.isDescSort
  } else {
    return this.isDescSort * -1
  }
}

const sortFollowers = (followers, sortValue) => {
  switch (sortValue) {
    case 'likes-za': {
      return followers.sort(compare.bind({ name: 'likes', isDescSort: 1 }))
    }
    case 'likes-az': {
      return followers.sort(compare.bind({ name: 'likes', isDescSort: -1 }))
    }
    case 'comments-za': {
      return followers.sort(compare.bind({ name: 'comments', isDescSort: 1 }))
    }
    case 'comments-az': {
      return followers.sort(compare.bind({ name: 'comments', isDescSort: -1 }))
    }
    case 'followers-za': {
      return followers.sort(compare.bind({ name: 'edge_followed_by.count', isDescSort: 1 }))
    }
    case 'followers-az': {
      return followers.sort(compare.bind({ name: 'edge_followed_by.count', isDescSort: -1 }))
    }
    case 'followings-za': {
      return followers.sort(compare.bind({ name: 'edge_follow.count', isDescSort: 1 }))
    }
    case 'followings-az': {
      return followers.sort(compare.bind({ name: 'mediaCounts', isDescSort: -1 }))
    }
    case 'posts-za': {
      return followers.sort(compare.bind({ name: 'mediaCounts', isDescSort: 1 }))
    }
    case 'posts-az': {
      return followers.sort(compare.bind({ name: 'mediaCounts', isDescSort: -1 }))
    }
  }

  return followers
}

export default (followers, filters) => {
  if (filters && filters.sort) {
    return sortFollowers(followers, filters.sort)
  } else {
    return followers
  }
}
