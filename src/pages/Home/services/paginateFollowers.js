export default (followers, page, followersLimit) => {
  return followers.slice(page * followersLimit, (page + 1) * followersLimit)
}
