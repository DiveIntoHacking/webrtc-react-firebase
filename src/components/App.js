import React from 'react';
import InputFormLocal from './InputFromLocal';
import InputFormRemote from './InputFormRemote';

const getMedia = async () => {
  const constraints = { audio: true, video: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch (err) {
    /* エラーを処理 */
    console.error(err);
  }
};

getMedia();

const App = () => {
  return (
    <>
      <InputFormLocal />
      <InputFormRemote />
    </>
  );
};

export default App;
