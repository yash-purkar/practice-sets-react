import React from 'react';
import {VideosState} from '../Contexts/VideosContext'
import { NavLink } from 'react-router-dom';
export const Header = () => {
  const {likedVideos,watchLater} = VideosState();
  return (
    <nav>
      <NavLink className="navItems" to="/">Home</NavLink>  
      <NavLink className="navItems" to="/videos">Videos</NavLink>  
      <NavLink className="navItems" to="/liked">Liked Videos({likedVideos.length})</NavLink>  
      <NavLink className="navItems" to="/watchLater">Watch Later({watchLater.length})</NavLink>
    </nav>
  );
};
