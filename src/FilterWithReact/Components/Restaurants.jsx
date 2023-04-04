import React, { useState } from 'react';

export const Restaurants = ({ restaurants }) => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const handleCheckChange = (e) => {
    const cuisine = e.target.value;
    const isChecked = e.target.checked;
    console.log("isChecked", isChecked)

    if (isChecked) {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
    else {
      setSelectedCuisines(selectedCuisines.filter(c => c !== cuisine))
    }
  }

  const filteredCuisines = restaurants.filter(({ cuisine }) => selectedCuisines.includes(cuisine));

  const cuisines = ["Italian", "Mexican", "Chinese"]
  return (
    <>{
      cuisines.map((cuisine, i) => {
        return (
          <label key={i}>
            <input type="checkbox" value={cuisine} checked={selectedCuisines.includes(cuisine)} onChange={handleCheckChange} />
            {cuisine}
          </label>
        )
      })
    }
      <ul style={{ width: "200px", margin: "auto" }}>
        {
          filteredCuisines.map(({ name, cuisine, location, rating }, index) => {
            return (
              <li key={index}>
                <div>Name: {name}</div>
                <div>Cuisine: {cuisine}</div>
                <div>Location: {location}</div>
                <div>Rating: {rating}</div>
              </li>
            )

          })
        }
      </ul>
    </>
  )
}