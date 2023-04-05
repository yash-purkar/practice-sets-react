import React, { useState } from 'react'

export const Cars = ({ carsData }) => {
  const [selectedMake, setSelectedMake] = useState("All");

  const filteredMakes = selectedMake === "All" ? carsData : carsData.filter(({ make }) => selectedMake === make);

  const makes = ["All", "Honda", "Toyota", "Ford", "Chevrolet"]
  return (
    <>
      <form>
        {
          makes.map(make => {
            return (
              <label>
                <input type="radio" name="car" value={make} checked={selectedMake === make} onChange={(e) => setSelectedMake(e.target.value)} />
                {make}
              </label>
            )
          })
        }
      </form>
      <ul>
        {
          filteredMakes.map(({ make, model, year, price }) => {
            return (
              <li>
                <div>Make: <strong>{make}</strong></div>
                <div>Model: {model}</div>
                <div>Year: {year}</div>
                <div>Price: {price}</div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
