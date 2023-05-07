import React from 'react'
import {VideosState} from '../Contexts/VideosContext'
import {SingleVideo} from '../Components/SingleVideo'
export const VideoListing = () => {
  const {videosData} = VideosState();
  return (
    <>
    <ul>
      {
        videosData.map(video => <SingleVideo key={video.id} video={video} noDetail/>)
      }
    </ul>
    </>
  )
}