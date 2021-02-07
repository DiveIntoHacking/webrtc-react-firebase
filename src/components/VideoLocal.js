import React, { useEffect, useRef } from 'react';

import Video from './Video';

const VideoLocal = ({ rtcClient }) => {
  const videoRef = useRef(null);
  const currentVideoRef = videoRef.current;
  const mediaStream = rtcClient.mediaStream;

  useEffect(() => {
    if (currentVideoRef === null) return;

    const getMedia = () => {
      try {
        currentVideoRef.srcObject = mediaStream;
      } catch (err) {
        console.error(err);
      }
    };

    getMedia();
  }, [currentVideoRef, mediaStream]);

  return (
    <Video isLocal={true} name={rtcClient.localPeerName} videoRef={videoRef} />
  );
};

export default VideoLocal;
