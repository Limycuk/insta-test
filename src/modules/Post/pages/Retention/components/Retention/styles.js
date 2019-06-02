import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  container: {
    flex: 1,
  },
  chart: {
    maxWidth: 800,
    padding: 20,
    margin: '0 auto',
  },
  posts: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    margin: 0,
  },
  post: {
    padding: 0,
    margin: 20,
    border: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: '3px solid rgba(77, 144, 254, 0.5)',
    },
  },
  activePost: {
    outline: '3px solid #4D90FE',
  },
}));
