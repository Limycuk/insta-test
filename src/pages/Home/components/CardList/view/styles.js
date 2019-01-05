export default () => ({
  container: {
    backgroundColor: '#eeeeee',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  card: {
    maxWidth: 345,
    margin: 20,
    minWidth: 345
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    listStyle: 'none',
    fontSize: 16,
    margin: '8px 0'
  },
  media: {
    maxHeight: 150,
    maxWidth: 150,
    margin: '0 auto'
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    margin: '0 0 12px'
  }
});
