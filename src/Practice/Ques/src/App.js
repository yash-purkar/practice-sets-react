import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import {Header} from './Components/Header'
import { Home } from './Pages/Home';
import { VideoListing } from './Pages/VideoListing';
import { LikedVideos } from './Pages/LikedVideos';
import { WatchLaterVideos } from './Pages/WatchLaterVideos';
import { VideoDetail } from './Pages/VideoDetail';

export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<VideoListing />} />
      <Route path="/liked" element={<LikedVideos />} />
      <Route path="/watchLater" element={<WatchLaterVideos />} />
      <Route path="/video/:id" element={<VideoDetail />} />

      </Routes>
    </div>
  );
}
