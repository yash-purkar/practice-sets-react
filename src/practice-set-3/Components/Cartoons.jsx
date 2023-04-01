import React from 'react'

export const Cartoons = ({ cartoons }) => {
  // const newCharacters = cartoons.filter(({ magnitude }) => magnitude > 5)
  return (
    <>
      <ul>

        {/* {
        newCharacters.map(({ name, superpower, magnitude }) => <li>Name: {name}, superpower: {superpower} magnitude: {magnitude}</li>)
      } */}

        {
          cartoons.map(({ name, superpower, magnitude }) => magnitude > 5 ? <li>Name: {name}, superpower: {superpower} magnitude: {magnitude}</li> : null)
        }
      </ul>
    </>
  )
}
