import React, { createContext, useState, useEffect, useContext } from 'react';
import { fakeFetch } from '../Data/fakeFetch';

export const VideosContext = createContext();

export const VideosContextProvider = ({ children }) => {
  const [videosData, setVideosData] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const getVideosData = async () => {
    try {
      const {
        status,
        data: { videos },
      } = await fakeFetch('https://example.com/api/videos');
      status === 200 && setVideosData(videos);
    } catch (err) {
      setErrMsg(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideosData();
  }, []);

  const handleLikeVideo = (videoToBeLike) => {
    setLikedVideos((prev) => [...prev, videoToBeLike]);
  };

  const handleWatchLater = (videoToWatch) => {
    setWatchLater((prev) => [...prev, videoToWatch]);
  };

  const handleDislikeVideo = (id) => {
    setLikedVideos((prev) => prev.filter((item) => item.id !== id));
  };
  const handleRemoveWatchLater = (id) => {
    setWatchLater((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <VideosContext.Provider
      value={{
        videosData,
        handleLikeVideo,
        likedVideos,
        handleWatchLater,
        watchLater,
        handleDislikeVideo,
        handleRemoveWatchLater,
      }}
    >
      {loading ? (
        <h1>Loading...</h1>
      ) : errMsg ? (
        <h1>
          {errMsg.status} {errMsg.message}
        </h1>
      ) : (
        <>{children}</>
      )}
    </VideosContext.Provider>
  );
};

export const VideosState = () => useContext(VideosContext);
