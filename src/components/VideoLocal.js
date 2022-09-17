import React, { useEffect, useRef } from 'react';

import Video from './Video';

const VideoLocal = ({ name }) => {
  const videoRef = useRef(null);
  const currentVideoRef = videoRef.current;
  console.log({ currentVideoRef, name });

  useEffect(() => {
    console.log({ currentVideoRef });
    if (currentVideoRef === null) return;

    const getMedia = async () => {
      const constraints = { audio: true, video: true };

      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(
          constraints
        );
        currentVideoRef.srcObject = mediaStream;
      } catch (err) {
        console.error(err);
      }
    };

    getMedia();
  }, [currentVideoRef]);

  return <Video isLocal={true} name={name} videoRef={videoRef} />;
};

export default VideoLocal;
