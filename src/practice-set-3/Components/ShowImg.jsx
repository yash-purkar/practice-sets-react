import React from 'react'

export const ShowImg = ({ imgUrl, width, height }) => {
  console.log(imgUrl, height, width)
  return (
    <img src={`${imgUrl}/${width}/${height}`} alt='img' />
  )
}
