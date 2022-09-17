import React from 'react';

const Video = ({ isLocal, name, videoRef }) => {
  console.log({ name, videoRef });

  return (
    <div>
      <video autoPlay muted={isLocal} ref={videoRef} />
      <div>{name}</div>
    </div>
  );
};

export default Video;
