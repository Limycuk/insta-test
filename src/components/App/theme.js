import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  error: {
    main: '#f44336',
  },
};

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette,
  error: {
    position: 'absolute',
    color: palette.error.main,
    fontSize: '12px',
  },
});
