import React, { useState } from 'react'

export const Workouts = ({ workouts }) => {
  const [selectedEquipment, setSelectedEquipment] = useState([]);

  const changeHandler = (e) => {
    const equipment = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedEquipment([...selectedEquipment, equipment]);
    } else {
      setSelectedEquipment(selectedEquipment.filter(eq => eq !== equipment));
    }
  }

  const filteredEquipments = workouts.filter(({ equipment }) => selectedEquipment.includes(equipment));

  const equipments = ["dumbbells", "resistance bands", "bodyweight"]
  return (
    <>
      {
        equipments.map((equipment, i) => {
          return (
            <label>
              <input type="checkbox" value={equipment} checked={selectedEquipment.includes(equipment)} onChange={changeHandler} />
              {equipment}</label>
          )
        })
      }
      <ul>
        {
          filteredEquipments.map(({ name, duration, equipment, difficulty }) => {
            return (
              <li>
                <div>Name: {name}</div>
                <div>Duration: {duration}</div>
                <div>Equipment: {equipment}</div>
                <div>Difficulty: {difficulty}</div>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
