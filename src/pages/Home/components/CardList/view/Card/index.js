import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

class CardItem extends PureComponent {
  render() {
    const { item, classes } = this.props;

    return (
      <Card className={classes.card}>
        <a
          href={'https://instagram.com/' + item.username}
          target="_blank"
          rel="noopener noreferrer">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={item.username}
              className={classes.media}
              image={item.profile_pic_url}
              title={item.username}
            />
          </CardActionArea>
        </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.username}
          </Typography>
          <p className={classes.name}>{item.full_name || '-'}</p>
          <ul className={classes.list}>
            <li>
              <b>{item.mediaCounts}</b> posts
            </li>
            <li>
              <b>{item.edge_followed_by.count}</b> followers
            </li>
            <li>
              <b>{item.edge_follow.count}</b> following
            </li>
          </ul>
          <ul className={classes.list}>
            <li>
              <b>{item.likes}</b> likes
            </li>
            <li>
              <b>{item.comments}</b> comments
            </li>
            <li />
          </ul>
        </CardContent>
      </Card>
    );
  }
}

CardItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    profile_pic_url: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    mediaCounts: PropTypes.number.isRequired,
    edge_followed_by: PropTypes.shape({
      count: PropTypes.number.isRequired
    }).isRequired,
    edge_follow: PropTypes.shape({
      count: PropTypes.number.isRequired
    }).isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired
  })
};

export default withStyles(styles)(CardItem);
