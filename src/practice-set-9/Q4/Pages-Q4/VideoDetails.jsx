import React, { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { VideosContext } from '../Contexts-Q4/VideosContext'
import { VideoCard } from '../Components-Q4/VideoCard'

export const VideoDetails = () => {
  const { videosData } = useContext(VideosContext)
  const { videoTitle } = useParams()

  const video = videosData.find(({ title }) => videoTitle === title);
  console.log(video, "vid")
  return (
    <ul>
      <VideoCard video={video} />
    </ul>
  )
}
