import React from 'react'

export const SuperPower = ({ cartoons, data }) => {
  const fitleredData = cartoons.filter(({ superpower }) => superpower === data)
  return (
    <ul>
      {fitleredData.map(({ name, superpower, magnitude }) => <li>Name: {name}, superpower: {superpower}, magnitude: {magnitude}</li>)}
    </ul>
  )
}
