import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import data04012019 from '~/data/04-01-2019';
// import data20122018 from '~/data/20-12-2018';

import styles from './styles';

const CardList = ({ classes }) => {
  const data = data04012019;
  return (
    <div className={classes.container}>
      <span>{data.length}</span>
      {data.map((item) => {
        return (
          <Card key={item.id} className={classes.card}>
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
      })}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(CardList);
