import React from 'react'

export const DeleteVideo = ({ setVideosData }) => {
  const clickHandler = () => {
    setVideosData((videosData) => videosData.filter((el, i) => i !== 0))
  }

  return <button onClick={clickHandler}>Delete</button>
}
