import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

import VolumeButton from './VolumeButton';
import useDimensions from './hooks/useDimentions';

const useStyles = makeStyles({});

const Video = ({ isLocal, name, videoRef }) => {
  const [muted, setMuted] = useState(true);
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);
  const classes = useStyles();

  return (
    <Card ref={refCard}>
      <CardActionArea>
        <video
          autoPlay
          muted={isLocal || muted}
          ref={videoRef}
          width={dimensionsCard.width}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <VolumeButton muted={muted} setMuted={setMuted} />
      </CardActions>
    </Card>
  );
};

export default Video;
