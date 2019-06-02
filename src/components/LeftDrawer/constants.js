import HomeIcon from '@material-ui/icons/Home';
import Accessibility from '@material-ui/icons/Accessibility';
import TrendingUp from '@material-ui/icons/TrendingUp';

export const LEFT_BAR_LINKS = {
  main: [
    {
      label: 'Home',
      link: '/',
      Icon: HomeIcon,
    },
    {
      label: 'Followers',
      link: '/follower-list',
      Icon: Accessibility,
    },
  ],
  statistics: [
    {
      label: 'Retention',
      link: '/statistics/retention',
      Icon: TrendingUp,
    },
  ],
};
