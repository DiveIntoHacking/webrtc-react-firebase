import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import VideoLocal from './VideoLocal';
import VideoRemote from './VideoRemote';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const VideoArea = ({ rtcClient }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <VideoLocal name={rtcClient.localPeerName} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <VideoRemote name={rtcClient.remotePeerName} />
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoArea;
