import React, { useContext } from 'react'
import { VideosContext } from '../Contexts-Q4/VideosContext'
import { VideoCard } from '../Components-Q4/VideoCard';

export const VideoListing = () => {
  const { videosData } = useContext(VideosContext);
  return (
    <>
      <h1>All Videos</h1>
      <ul>
        {
          videosData.map((video) => <VideoCard video={video} key={video.title} />)
        }
      </ul>
    </>
  )
}
