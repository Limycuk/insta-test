function filterCompare(follower) {
  const fieldValue = this.name.split('.').reduce((memo, item) => memo[item], follower);

  if (this.isMore) {
    return fieldValue >= this.value;
  } else {
    return fieldValue <= this.value;
  }
}

const filterFollower = (followers, filter) => {
  const [filterName, filterValue] = filter;

  switch (filterName) {
    case 'likesFrom': {
      return followers.filter(filterCompare, { name: 'likes.count', value: parseInt(filterValue), isMore: true });
    }
    case 'likesTo': {
      return followers.filter(filterCompare, { name: 'likes.count', value: parseInt(filterValue), isMore: false });
    }
    case 'commentsFrom': {
      return followers.filter(filterCompare, { name: 'comments', value: parseInt(filterValue), isMore: true });
    }
    case 'commentsTo': {
      return followers.filter(filterCompare, { name: 'comments', value: parseInt(filterValue), isMore: false });
    }
    case 'followersFrom': {
      return followers.filter(filterCompare, { name: 'followers', value: parseInt(filterValue), isMore: true });
    }
    case 'followersTo': {
      return followers.filter(filterCompare, { name: 'followers', value: parseInt(filterValue), isMore: false });
    }
    case 'followingsFrom': {
      return followers.filter(filterCompare, { name: 'followings', value: parseInt(filterValue), isMore: true });
    }
    case 'followingsTo': {
      return followers.filter(filterCompare, { name: 'followings', value: parseInt(filterValue), isMore: false });
    }
    case 'postsFrom': {
      return followers.filter(filterCompare, { name: 'mediaCounts', value: parseInt(filterValue), isMore: true });
    }
    case 'postsTo': {
      return followers.filter(filterCompare, { name: 'mediaCounts', value: parseInt(filterValue), isMore: false });
    }
    case 'username': {
      for (let follower of followers) {
        if (follower.username === filterValue) {
          return [follower];
        }
      }
      return [];
    }
  }

  return followers;
};

export const filterFollowers = (followers, fiters) => {
  if (fiters) {
    return Object.entries(fiters).reduce(filterFollower, followers);
  } else {
    return followers;
  }
};

function sortCompare(a, b) {
  const aValue = this.name.split('.').reduce((memo, item) => memo[item], a);
  const bValue = this.name.split('.').reduce((memo, item) => memo[item], b);

  if (aValue === bValue) {
    return 0;
  } else if (aValue < bValue) {
    return this.isDescSort;
  } else {
    return this.isDescSort * -1;
  }
}

const sortFollower = (followers, sortValue) => {
  switch (sortValue) {
    case 'likes-za': {
      return followers.sort(sortCompare.bind({ name: 'likes.count', isDescSort: 1 }));
    }
    case 'likes-az': {
      return followers.sort(sortCompare.bind({ name: 'likes.count', isDescSort: -1 }));
    }
    case 'comments-za': {
      return followers.sort(sortCompare.bind({ name: 'comments', isDescSort: 1 }));
    }
    case 'comments-az': {
      return followers.sort(sortCompare.bind({ name: 'comments', isDescSort: -1 }));
    }
    case 'followers-za': {
      return followers.sort(sortCompare.bind({ name: 'followers', isDescSort: 1 }));
    }
    case 'followers-az': {
      return followers.sort(sortCompare.bind({ name: 'followers', isDescSort: -1 }));
    }
    case 'followings-za': {
      return followers.sort(sortCompare.bind({ name: 'followings', isDescSort: 1 }));
    }
    case 'followings-az': {
      return followers.sort(sortCompare.bind({ name: 'followings', isDescSort: -1 }));
    }
    case 'posts-za': {
      return followers.sort(sortCompare.bind({ name: 'mediaCounts', isDescSort: 1 }));
    }
    case 'posts-az': {
      return followers.sort(sortCompare.bind({ name: 'mediaCounts', isDescSort: -1 }));
    }
  }

  return followers;
};

export const sortFollowers = (followers, filters) => {
  if (filters && filters.sort) {
    return sortFollower(followers, filters.sort);
  } else {
    return followers;
  }
};

export const paginateFollowers = (followers, page, followersLimit) => {
  return followers.slice(page * followersLimit, (page + 1) * followersLimit);
};
