import { makeStyles } from '@material-ui/styles';

export default makeStyles(() => ({
  card: {
    margin: 20,
    padding: 12,
    minWidth: 200,
  },
  activeCard: {
    outline: '3px solid #4D90FE',
  },
  content: {
    paddingBottom: '0 !important',
  },
  title: {
    margin: 0,
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    listStyle: 'none',
    fontSize: 16,
  },
  likesLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    textAlign: 'center',
    height: 200,
  },
  name: {
    fontSize: 16,
    fontWeight: 600,
    margin: '0 0 12px',
  },
  avatar: {
    maxWidth: 200,
    maxHeight: 200,
    width: '100%',
    height: '100%',
  },
  likeIcon: {
    transform: 'scale(0.8)',
  },
}));
