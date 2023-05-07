import React from 'react';
import { VideosState } from '../Contexts/VideosContext';
import { SingleVideo } from '../Components/SingleVideo';
export const WatchLaterVideos = () => {
  const { watchLater } = VideosState();
  return (
    <>
      <ul>
        {watchLater.map((video) => (
          <SingleVideo key={video.id} video={video} noDetail />
        ))}
      </ul>
    </>
  );
};
