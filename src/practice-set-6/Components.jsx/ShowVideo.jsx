import React from 'react'

export const ShowVideo = ({ videosData }) => {
  return (
    <>
      <h2>Playlist</h2>
      {
        videosData.map(({ title, thumbnail, views, likes }, i) => {
          return (
            <div key={i} style={{ display: "inline-block", padding: "1rem" }}>
              <img src={thumbnail} alt="" />
              <h3>{title}</h3>
              <div>Views: {views}</div>
              <div>Likes: {likes}</div>
            </div>
          )
        })
      }
    </>
  )
}
