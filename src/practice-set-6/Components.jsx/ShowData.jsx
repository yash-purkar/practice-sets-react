import React, { useState } from 'react'

export const ShowData = ({ data }) => {
  const [showBakery, setShowBakery] = useState(false);

  const filteredData = showBakery ? data.filter(({ category }) => category === "Bakery") : data;

  return (
    <>
      {
        filteredData.map(({ caption, src, views, likes, category }) => {
          return (
            <div style={{ display: "inline-block", padding: "1rem" }}>
              <img src={src} alt="img" />
              <p>{caption}</p>
              <div>Likes: {likes}</div>
              <div>Views: {views}</div>
            </div>
          )
        })
      }
      <button onClick={() => setShowBakery(!showBakery)}>{showBakery ? "Show All" : "Show Bakery"}</button>
    </>
  )
}
