import React, { useState } from 'react'

export const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const clickHandler = () => {
    setShowContent(!showContent);
  };
  return (
    <>
      <h1>{title}</h1>
      {showContent ? <p>{content}</p> : null}
      <button onClick={clickHandler}>{showContent ? "Hide" : "Know More"}</button>
    </>
  )
}
