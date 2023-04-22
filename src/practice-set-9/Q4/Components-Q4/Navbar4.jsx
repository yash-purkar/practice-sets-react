import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { VideosContext } from '../Contexts-Q4/VideosContext'

export const Navbar4 = () => {
  const { likedVideos, watchedLaterVideos } = useContext(VideosContext);
  const navbarStyle = {
    width: "400px",
    display: "flex",
    justifyContent: "space-between"
  }
  return (
    <nav style={navbarStyle}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/videos">Videos</NavLink>
      <NavLink to="/likedVideos">Liked Videos({likedVideos.length})</NavLink>
      <NavLink to="/watchLater">Watch Later({watchedLaterVideos.length})</NavLink>
    </nav>
  )
}
