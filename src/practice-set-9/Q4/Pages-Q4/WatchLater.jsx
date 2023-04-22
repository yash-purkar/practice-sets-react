import React, { useContext } from 'react'
import { VideosContext } from '../Contexts-Q4/VideosContext'
import { VideoCard } from '../Components-Q4/VideoCard';

export const WatchLater = () => {
  const { watchedLaterVideos } = useContext(VideosContext);
  return (
    <>
      {watchedLaterVideos.length === 0 && <h1>Nothing in Watch later</h1>}
      <ul>
        {
          watchedLaterVideos?.map(video => <VideoCard video={video} key={video.title} />)
        }
      </ul>
    </>
  )
}
