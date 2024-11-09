import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function videoPlayer(vid:string) {
  
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={vid} opts={opts} />;
}