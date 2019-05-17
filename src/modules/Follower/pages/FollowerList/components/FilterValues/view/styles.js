export default () => ({
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    boxShadow: '0 3px 3px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#eeeeee',
  },
  panel: {
    flex: 1,
    padding: '10px 10px 5px 20px',
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    maxWidth: 1200,
    border: '1px solid #a9a9a9',
    display: 'flex',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  filter: {
    marginRight: 10,
    lineHeight: '32px',
    paddingBottom: 5,
  },
  chip: {
    marginRight: 10,
    marginBottom: 5,
  },
});
