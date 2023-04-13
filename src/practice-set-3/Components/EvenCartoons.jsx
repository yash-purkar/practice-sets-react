import React from 'react'

export const EvenCartoons = ({ data }) => {
  const filteredData = data.filter(({ magnitude }) => magnitude % 2 === 0);
  return (

    filteredData.map(({ name }) => <h1>{name}</h1>)

  )
}
