import React from 'react'

export const SuperPower = ({ cartoons, data }) => {
  return (
    <ul>
      {cartoons.map(({ name, superpower, magnitude }) => superpower === data ? <li>Name: {name}, superpower: {superpower}, magnitude: {magnitude}</li> : null)}
    </ul>
  )
}
