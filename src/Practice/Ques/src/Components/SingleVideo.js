import React from 'react';
import { NavLink } from 'react-router-dom';
import { VideosState } from '../Contexts/VideosContext';
export const SingleVideo = ({ video, noDetail, noBtn }) => {
  const {
    handleLikeVideo,
    handleWatchLater,
    likedVideos,
    handleDislikeVideo,
    watchLater,
    handleRemoveWatchLater,
  } = VideosState();

  const { id, title, description, url, thumbnail, duration } = video;
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>{!noBtn && <NavLink to={`/video/${id}`}>Watch Here</NavLink>}</p>
      {!noDetail && (
        <>
          <h4>Description: {description}</h4>
          <p>Duration: {duration}Min</p>
        </>
      )}
      {likedVideos.some((video) => video.id === id) ? (
        <button onClick={() => handleDislikeVideo(id)}>Dislike</button>
      ) : (
        <button onClick={() => handleLikeVideo(video)}>Like</button>
      )}

      {watchLater.some((video) => video.id === id) ? (
        <button onClick={() => handleRemoveWatchLater(id)}>
          Remove From Watch later
        </button>
      ) : (
        <button onClick={() => handleWatchLater(video)}>
          Add to Watch later
        </button>
      )}
    </li>
  );
};
