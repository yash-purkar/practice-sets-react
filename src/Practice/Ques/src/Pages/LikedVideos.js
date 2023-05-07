import React from 'react'
import {VideosState} from '../Contexts/VideosContext'
import {SingleVideo} from '../Components/SingleVideo'
export const LikedVideos = () => {
  const {likedVideos} = VideosState();
  return (
    <>
    <ul>
      {
        likedVideos.map(video => <SingleVideo key={video.id} video={video}noDetail/>)
      }
    </ul>
    </>
  )
}