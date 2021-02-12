import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

import useDimensions from './hooks/useDimentions';

const useStyles = makeStyles({});

const Video = ({ isLocal, name, videoRef }) => {
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);
  const classes = useStyles();

  return (
    <Card ref={refCard}>
      <CardActionArea>
        <video
          autoPlay
          muted={isLocal}
          ref={videoRef}
          width={dimensionsCard.width}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default Video;
