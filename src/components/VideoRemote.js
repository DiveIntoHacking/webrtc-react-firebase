import React, { useEffect, useRef } from 'react';

import Video from './Video';

const VideoRemote = ({ name }) => {
  const videoRef = null;

  return <Video isLocal={false} name={name} videoRef={videoRef} />;
};

export default VideoRemote;
