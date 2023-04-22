import React, { useContext } from 'react'
import { VideosContext } from '../Contexts-Q4/VideosContext'
import { VideoCard } from '../Components-Q4/VideoCard';

export const LikedVideos = () => {
  const { likedVideos } = useContext(VideosContext);
  return (
    <>
      {likedVideos.length === 0 && <h1>No Liked Videos</h1>}
      <ul>
        {
          likedVideos?.map(video => <VideoCard video={video} key={video.title} noDetail />)
        }
      </ul>
    </>
  )
}
