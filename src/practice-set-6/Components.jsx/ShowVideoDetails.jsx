import React from 'react'

export const ShowVideoDetails = ({ videoData: { title, thumbnail, views, likes, label }, setVideoData }) => {

  const clickHandler = () => {
    setVideoData((videoData) => ({ ...videoData, label: "Self Motivational" }))
  }
  return (
    <>
      <img src={thumbnail} alt="img" />
      <h3>{title}</h3>
      <div><span>Views: </span>{views}</div>
      <div><span>Likes: </span>{likes}</div>
      <div>{label && <span>Label:</span>} {label}</div>
      <button onClick={clickHandler}>Add Label</button>
    </>
  )
}
