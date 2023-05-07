import React from 'react';
import { useParams } from 'react-router-dom';
import { VideosState } from '../Contexts/VideosContext';
import { SingleVideo } from '../Components/SingleVideo';
export const VideoDetail = () => {
  const { videosData } = VideosState();
  const { id } = useParams();

  const video = videosData.find((video) => video.id === Number(id));
  return (
    <>
      <SingleVideo video={video} noBtn/>
    </>
  );
};
