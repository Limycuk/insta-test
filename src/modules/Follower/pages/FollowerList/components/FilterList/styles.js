export default () => ({
  container: {
    padding: '20px 20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  panel: {
    flex: 1,
    padding: '20px 10px 10px',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    maxWidth: 1200,
    border: '1px solid #a9a9a9',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  group: {
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: 4,
    display: 'flex',
    flex: 1,
    margin: '5px 10px',
    '&:hover': {
      borderColor: 'rgba(0, 0, 0, 0.87)',
    },
  },
  submitContainer: {
    display: 'flex',
    flex: 1,
    margin: '5px 10px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  field: {
    flex: 1,
    minWidth: 130,
    marginLeft: 10,
    marginRight: 10,
  },
});
