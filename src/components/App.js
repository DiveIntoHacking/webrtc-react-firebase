import React from 'react';

import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import RtcClient from '../utils/RtcClient';
import VideoArea from './VideoArea';

const App = () => {
  const rtcClient = new RtcClient();
  console.log({ rtcClient });

  return (
    <>
      <InputFormLocal rtcClient={rtcClient} />
      <InputFormRemote rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
