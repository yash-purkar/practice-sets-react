import React from 'react'

export const EvenCartoons = ({ data }) => {
  return (

    data.map(({ name, magnitude }) => magnitude % 2 === 0 ? <h1>{name}</h1> : null)

  )
}
