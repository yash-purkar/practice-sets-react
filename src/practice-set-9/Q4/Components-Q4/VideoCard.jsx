import React, { useContext } from 'react'
import { VideosContext } from '../Contexts-Q4/VideosContext'
import { NavLink } from 'react-router-dom';

export const VideoCard = ({ video, noDetail }) => {
  const { thumbnail, title, url, description, duration } = video;
  const { likedVideosHandler, watchLaterHandler } = useContext(VideosContext);
  return (
    <li style={{ border: "1px solid red", width: "250px", padding: "1rem" }}>
      <img src={thumbnail} alt="" />
      <p>{title}</p>
      {!noDetail && <p>Description: {description}</p>}
      {!noDetail && <p>Duration : {duration}</p>}
      <NavLink to={`/video/${title}`}>Watch here</NavLink>
      <br />
      {/* <p>description: {description}</p> */}
      <button onClick={() => likedVideosHandler(video)}>Like</button>
      <button onClick={() => watchLaterHandler(video)}>Add to watch later</button>
    </li>
  )
}
