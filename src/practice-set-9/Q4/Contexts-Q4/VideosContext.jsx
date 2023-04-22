import React, { useState, createContext, useEffect } from 'react'
import { fakeFetch4 } from '../../Data';

export const VideosContext = createContext()

export const VideosContextProvider = ({ children }) => {
  const [videosData, setVideosData] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchedLaterVideos, setWatchLaterVideos] = useState([]);

  const getVideosData = async () => {
    try {
      const { status, data: { videos } } = await fakeFetch4("https://example.com/api/videos");
      status === 200 && setVideosData(videos)
    } catch (err) {
      console.log(err)
    }
  }

  const likedVideosHandler = (videoToBeAdded) => {
    setLikedVideos([...likedVideos, videoToBeAdded])
  }

  const watchLaterHandler = (videoToBeAdded) => {
    setWatchLaterVideos([...watchedLaterVideos, videoToBeAdded]);
  }

  useEffect(() => {
    getVideosData()
  }, [])

  return (
    <VideosContext.Provider value={{ videosData, likedVideos, likedVideosHandler, watchLaterHandler, watchedLaterVideos }}>
      {children}
    </VideosContext.Provider>
  )
}
